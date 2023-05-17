import { SET_USER_INFO } from "../types/userInfoTypes"


const initialState = {
    displayName: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).displayName : '',
    email: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).email : '',
    photoURL: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).photoURL : '',
}

export default function userInfoReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: action.payload
            }
        default:
            return state
    }
}