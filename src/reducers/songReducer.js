import {
    SET_SONG
} from '../actions/types';

const initialState = {
    song: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SONG:
            return {
                ...state,
                song: action.payload
            }

        default:
            return state;
    }
};

