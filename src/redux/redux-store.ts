import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    setFollow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    switchFetching, switchFollowingProgress,
    setUnfollow,
    usersReducer
} from "./users-reducer";
import {authReducer, setAuthUserData} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type ActionsType = ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageAC>
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof setFollow>
    | ReturnType<typeof setUnfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalCount>
    | ReturnType<typeof switchFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof switchFollowingProgress>



// window.store = store