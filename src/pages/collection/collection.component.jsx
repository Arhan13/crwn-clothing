import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'>{ title }</h2>
        <div className='items'>
        {items.map(item => (
            <CollectionItem key={item.id} item={item}/>
        ))}
        </div>
    </div>
    );
};
//ownProps = props of the component we are wrapping in the connect

const mapStateToProps = (state, ownProps) => ({

    collection: selectCollection(ownProps.match.params.collectionId)(state)
    //This is necessary bc unlike other selectors this selector needs a part of thr state depending on the url parameter
    //We get collection id, then we pass it into the selectCollections and it gives another function, passing that function into the state
});

export default connect(mapStateToProps)(CollectionPage);