import { ALL_POSTS, SAVE_COMMENT, COMMENT_POST } from './types';
import axios from 'axios';


export const getAllPosts = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            dispatch({
                type: ALL_POSTS,
                payload: res.data
            })
        })
}

export const saveComment = status => dispatch => {
    dispatch({
        type: SAVE_COMMENT,
        payload: status
    })
}

export const commentPost = (status, id) => dispatch => {
    // dispatch({
    //     type: TOGGLE_STATUS,
    //     status,
    //     payload: id
    // })
    console.log("TEST")
}