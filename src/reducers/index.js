import { combineReducers } from 'redux';
import songListReducer from './songListReducer';
import songReducer from './songReducer';
import blogDetailsReducer from './blogDetailsReducer';

export default combineReducers({
    list: songListReducer,
    song: songReducer,
    blogReducer: blogDetailsReducer
});
