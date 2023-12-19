import { AuthActionTypes } from "../../../enums";
import { AuthAction } from '../../../types/index';

export const logIn = ({token}: {token: string}): AuthAction => ({
    type: AuthActionTypes.LOG_IN,
    payload: {token}
});

export const signUp = ({token}: {token: string}): AuthAction => ({
    type: AuthActionTypes.SIGN_UP,
    payload: {token}
});

export const logout = (): AuthAction => ({
    type: AuthActionTypes.LOG_OUT,
});

export const restoreToken = ({token}: {token: string}): AuthAction => ({
    type: AuthActionTypes.RESTORE_TOKEN,
    payload: {token}
});

