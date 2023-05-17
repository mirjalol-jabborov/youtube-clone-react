import { IS_FIXED, TOGGLE_SIDE_MENU } from "../types/sideMenuTypes"

const initialState = {
    toggle: true,
    isFixed: false
}

export default function sideMenuReducer(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_SIDE_MENU:
            return {
                ...state,
                toggle: !state.toggle
            }
        case IS_FIXED:
            return {
                ...state,
                toggle: action.payload.toggle,
                isFixed: action.payload.fixed,
            }
        default:
            return state
    }
}