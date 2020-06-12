import  { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);
//Object to array
export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    //Gets all keys of object that we pass to it and gives us in an array form
    collections => Object.keys(collections).map(key => collections[key])
    //map over array of keys we have, then get collections at that key value
)
export const selectCollection = collectionUrlParam => //this is basically the string
    createSelector( //passing into the selectCollection
        [selectCollections],
        collections => collections[collectionUrlParam] //find collection.id matching the url parameter of our collection id map
        //collections st the collection url parameter
);
 