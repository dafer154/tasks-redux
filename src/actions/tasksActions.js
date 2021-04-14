import { ALL_POSTS, SAVE_COMMENT, COMMENT_POST } from "./types";
import axios from "axios";

export const getAllPosts = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
        dispatch({
            type: ALL_POSTS,
            payload: res.data,
        });
    });
};

export const saveComment = (newComment) => (dispatch) => {
    dispatch({
        type: SAVE_COMMENT,
        payload: newComment,
    });
};

export const commentsPost = (postId) => (dispatch) => {
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then((res) => {
    console.log("comments", res)    
    dispatch({
            type: COMMENT_POST,
            payload: res.data
        });
    });
};
