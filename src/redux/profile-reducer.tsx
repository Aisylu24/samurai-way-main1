import {ActionsType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export type ProfilePageType = {
    posts: PostType[],
    newPostText: string
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

let initialState:ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi there', likesCount: 10},
        {id: 2, message: 'My first post', likesCount: 25}
    ],
    newPostText: ''
}

export const profileReducer = (state:ProfilePageType = initialState, action: ActionsType):ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state,
                posts:[...state.posts, newPost],
                newPostText: ''
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText}
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)