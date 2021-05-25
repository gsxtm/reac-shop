import { combineReducers } from 'redux';
import {reducer as shopReducer} from '../pages/shop/store/index';

const reducer = combineReducers({
    shop:shopReducer
});
export default reducer;