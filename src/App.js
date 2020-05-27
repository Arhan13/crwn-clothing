import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';

import { connect } from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  // constructor(){
  //   super();

  //   this.state = {
  //     currentUser:null
  //   };
  // }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapShot =>{
          setCurrentUser ({
              id: snapShot.id,
              ...snapShot.data()
            });
        });
      }
      else{
      setCurrentUser( userAuth );
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route 
            exact 
            path='/signin' 
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
                ) : (
                  <SignInAndSignUpPage/>
                  )
                }
              />
        </Switch>
      </div>
    );
  }
  
}
const mapStatetoProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
  //It goes to a function which gets the user object and then calls dispatch
  //Dispatch basically takes an action object that it passes to every reducer
  //Our user action is a function is basically a function with takes in user object and returns action object
});


export default connect(
  mapStatetoProps,
  mapDispatchToProps
  )(App);
