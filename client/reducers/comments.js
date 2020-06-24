
function postComments(state = [], action) {
    switch (action.type) {
        case 'ADD_COMMENT':
            //return neew state
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            //return without the deleted comment
            return [
                //from start to the one we wnt to delete
                ...state.slice(0, action.i),
                //after deleted oone to the end
                ...state.slice(action.i + 1)
            ]

        default:
            return state;
    }
    return state;
}

function comments(state = [], action) {
    if (typeof action.postId !== 'undefined') {
        return {
            //take current state
            ...state,
            //overwite
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}
export default comments;