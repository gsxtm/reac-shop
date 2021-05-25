import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
// immutable.js
// immutable对象不可以改变
const defaultState = fromJS({
    lists: [],
    carList: []
});
const getShopListsData = (state, action) => {
    return state.merge({
        'lists': fromJS(action.data)
    });
};
const addCount = (state, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    let thisId = action.id;
    let itemId = newState.lists.findIndex((item) => {
        return item.id === thisId
    })
    let itemCarId = newState.carList.findIndex((item) => {
        return item.id === thisId
    })
    let item = newState.lists.find((item) => {
        return item.id === thisId
    })
    newState.lists[itemId].count++;
    if (itemCarId == "-1") {
        newState.carList.push(item)
    } else {
        newState.carList[itemCarId].count++;
    }
    return state.merge({
        'lists': fromJS(newState.lists),
        'carList': fromJS(newState.carList)
    });
};
const reduceCount = (state, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    let thisId = action.id;
    let itemId = newState.lists.findIndex((item) => {
        return item.id === thisId
    })
    let itemCarId = newState.carList.findIndex((item) => {
        return item.id === thisId
    })
    let item = newState.lists.find((item) => {
        return item.id === thisId
    })
    newState.lists[itemId].count--;
    if (itemCarId == "-1") {
        newState.carList.push(item)
    } else {
        newState.carList[itemCarId].count--;
        if (newState.carList[itemCarId].count==0) {
            newState.carList.splice(itemCarId, 1)
            console.log("123")
        } 
    }
    return state.merge({
        'lists': fromJS(newState.lists),
        'carList': fromJS(newState.carList)
    })
};
const emptyCount = (state, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    newState.lists.forEach(element => {
        return element.count = 0;
    });
    return state.merge({
        'lists': fromJS(newState.lists),
        'carList': []
    })
};
export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.GET_LIST:
            return getShopListsData(state, action);
        case actionTypes.ADD_COUNT:
            return addCount(state, action);
        case actionTypes.REDUCE_COUNT:
            return reduceCount(state, action);
        case actionTypes.EMPTY_COUNT:
            return emptyCount(state, action);
        default:
            return state;
    }
}