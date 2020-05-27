import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={ () => auth.signOut()}> SIGN OUT</div>
                :(
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            )}
        </div>
        
    </div>

);

//Function that allows us to acess the state from root reducer
const mapStateToProps = state => ({ //State is top level root reducer
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
//Connect is a HOC which gets two functions one being mapStateProps and 