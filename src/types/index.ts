import { ReactNode } from 'react';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import { AuthActionTypes } from '../enums';


export interface AuthUser {
    token: string
};

export interface AuthUserForm {
    email: string,
    password: string
};

export interface AuthState {
    isAuthorized: boolean,
    user: {
        token: string,
    } | null,
    isLoading: boolean,
    signUp: ({email, password}: {email: string, password: string}) => void,
    logIn: ({email, password}: {email: string, password: string}) => void,
    logOut: () => void,
    restoreToken: () => void,
};

export interface AuthProviderProps {
    children: ReactNode,
};

export type AuthAction =
| { type: AuthActionTypes.LOG_IN; payload: AuthUser}
| { type: AuthActionTypes.SIGN_UP; payload: AuthUser}
| { type: AuthActionTypes.LOG_OUT;}
| { type: AuthActionTypes.RESTORE_TOKEN; payload: AuthUser}

