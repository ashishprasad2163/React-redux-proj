import React, { useState } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SongList = (props) => {

    const [name, setName] = useState('');

    const handleChange = (e) => {
        props.addSong(e.target.value)
        setName(e.target.value)
    };

    return (
        <div>
            <h3>
                Selected song:{props.song ? props.song : "select a song"}
            </h3>
            <label>
                Add new song
            </label>
            <span>{props.newSong.name}</span>
            <input
                value={name}
                onChange={(e) => handleChange(e)}
            />
            <div>
                SongList:
            </div>
            <ul>{props.songList.map(({ name, duration }) => (
                <li onClick={() => props.setSong(name)} key={`${name} ${Math.random()}`}>{name} {duration}</li>
            ))}</ul>
        </div>
    )
};

SongList.propType = {
    song: PropTypes.string.isRequired,
    songList: PropTypes.array.isRequired,
    newSong: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        song: state.song.song,
        songList: state.list.songList,
        newSong: state.list.newSong,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSong: (s) => dispatch({
            type: 'ADD_SONG_LIST', payload: {
                name: s,
                duration: 'asdasd'
            }
        }),
        setSong: (name) => dispatch({
            type: 'SET_SONG',
            payload: name
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList);