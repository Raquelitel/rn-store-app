import { AuthActionTypes } from "../../../enums";
import { AuthAction, AuthState } from "../../../types";

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case AuthActionTypes.LOG_IN:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true
            } 
        case AuthActionTypes.SIGN_UP:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
            }
        case AuthActionTypes.LOG_OUT:
            return {
                ...state,
                user: null,
                isAuthorized: false,
            }
        case AuthActionTypes.RESTORE_TOKEN:
            return {
                ...state,
                user: action.payload,
                isAuthorized: true,
            }
        default:
            return state;
    }
}