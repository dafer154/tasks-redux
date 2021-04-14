import { ALL_POSTS, SAVE_COMMENT, COMMENT_POST } from "../actions/types";

const initialState = {
    allPosts: [],
    arrayCommentsPosts: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_POSTS:
            return {
                ...state,
                allPosts: action.payload,
            };
        case COMMENT_POST:
            return {
                ...state,
                arrayCommentsPosts: action.payload.comments.filter(
                    (comment) => comment.postId == action.payload.postId
                ),
            };
        case SAVE_COMMENT:
            return {
                ...state,
                arrayCommentsPosts: [
                    ...state.arrayCommentsPosts,
                    action.payload,
                ],
            };
        default:
            return state;
    }
};

export default tasksReducer;
