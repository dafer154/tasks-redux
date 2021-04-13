import { ALL_POSTS, SAVE_COMMENT, COMMENT_POST } from '../actions/types';

const initialState = {
    allPosts: []
}

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POSTS:
            console.log("ENTER REDUCER", action)
            return {
                ...state,
                allPosts: action.payload
            }
        default:
            return state
    }
}

export default tasksReducer;