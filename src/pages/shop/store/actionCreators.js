import * as actionTypes from './actionTypes'
import axios from 'axios';
import {fromJS} from 'immutable';
const getInfo = (data) => ({
    type: actionTypes.GET_LIST,
    data:fromJS(data)
});
export const addCount = (id) => ({
    type: actionTypes.ADD_COUNT,
    id:id
});
export const reduceCount = (id) => ({
    type: actionTypes.REDUCE_COUNT,
    id:id
});
export const emptyCount = () => ({
    type: actionTypes.EMPTY_COUNT
});
export const getDataList = () => {
    return (dispatch)=>{
        axios.get('/api/lists.json')
        .then((res)=>{
            const data = res.data;
            data.data.Lists.forEach(element => {
                element.count=0;
            });
            dispatch(getInfo(data.data.Lists));
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
}
