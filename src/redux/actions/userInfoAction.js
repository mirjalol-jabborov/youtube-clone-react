import { SET_USER_INFO } from "../types/userInfoTypes"


export const setUser = (user) => {
    return {
        type: SET_USER_INFO,
        payload: user
    }
}