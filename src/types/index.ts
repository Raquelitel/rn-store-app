import { ReactNode } from 'react';
import { AuthActionTypes } from '../enums';


export type AuthUser = {
    token: string
};

export interface AuthUserForm {
    email: string,
    password: string
};

export type AuthState = {
    isAuthorized: boolean,
    user: {
        token: string,
    } | null,
    isLoading: boolean,
    isError: boolean,
    error: string | null | unknown,
};

export interface AuthProviderProps {
    children: ReactNode,
};

export type AuthAction =
| { type: AuthActionTypes.LOG_IN_REQUEST}
| { type: AuthActionTypes.LOG_IN_SUCCESS; payload: AuthUser}
| { type: AuthActionTypes.LOG_IN_ERROR; payload: string}
| { type: AuthActionTypes.SIGN_UP_REQUEST}
| { type: AuthActionTypes.SIGN_UP_SUCCESS; payload: AuthUser}
| { type: AuthActionTypes.SIGN_UP_ERROR; payload: string}
| { type: AuthActionTypes.LOG_OUT_REQUEST}
| { type: AuthActionTypes.LOG_OUT_SUCCESS}
| { type: AuthActionTypes.LOG_OUT_ERROR; payload: string}
| { type: AuthActionTypes.RESTORE_TOKEN_REQUEST}
| { type: AuthActionTypes.RESTORE_TOKEN_SUCCESS; payload: AuthUser}
| { type: AuthActionTypes.RESTORE_TOKEN_ERROR; payload: string}

