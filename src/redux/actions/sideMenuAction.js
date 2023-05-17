import { IS_FIXED, TOGGLE_SIDE_MENU } from "../types/sideMenuTypes";

export const toggleSideMenu = () => ({
    type: TOGGLE_SIDE_MENU   
})

export const isFixedSideMenu = (payload) => ({
    type: IS_FIXED,
    payload: payload
})