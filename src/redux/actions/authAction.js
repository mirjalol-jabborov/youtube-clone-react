import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../types/authTypes"
import { auth, provider } from "../../config"
import { reload, signInWithPopup } from "firebase/auth"

export const loginWithGoogle = () => {
    return (dispatch) => {
        dispatch(loginRequest())
        signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(loginSuccess(result.user));
            window.location.reload();
        })
        .catch((error) => {
            dispatch(loginFailure(error.message))
        })
  }
}

  export const loginRequest = () => ({
    type: LOGIN_REQUEST
    })
  
  export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
  })
  
  export const loginFailure = (error) => ({
    type: LOGIN_FAILURE,
    payload: error
  })