import Data from '../Data';
import {
    ADD_SONG_LIST,
    REMOVE_SONG_LIST
} from '../actions/types';

const initialState = {
    songList: Data,
    newSong: {
        name: "",
        duration: ""
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_SONG_LIST:
            return {
                ...state,
                songList: state.songList.concat({
                    name: action.payload.name,
                    duration: action.payload.duration
                })
            };
        case REMOVE_SONG_LIST:
            return {
                ...state,
                songList: state.songList.filter(song => song.name !== action.value.name)
            };
        default:
            return state
    }
};