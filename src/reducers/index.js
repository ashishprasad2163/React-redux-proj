import { combineReducers } from 'redux';
import songListReducer from './songListReducer';
import songReducer from './songReducer';

export default combineReducers({
    list: songListReducer,
    song: songReducer
});
