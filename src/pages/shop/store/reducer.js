import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
// immutable.js
// immutable对象不可以改变
const defaultState = fromJS({
    lists: [],
    carList:[]
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
    newState.lists[itemId].count++;
    return fromJS(newState)
};
const reduceCount = (state, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    let thisId = action.id;
    let itemId = newState.lists.findIndex((item) => {
        return item.id === thisId
    })

    newState.lists[itemId].count--;
    return fromJS(newState)
};
const emptyCount = (state, action) => {
    var newState = JSON.parse(JSON.stringify(state));
    newState.lists.forEach(element => {
        return element.count=0;
    });
    return fromJS(newState)
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