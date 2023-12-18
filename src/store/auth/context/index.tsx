import { Dispatch, createContext, useContext, useReducer } from "react";
import { AuthAction, AuthState } from "../../../types";
import { AuthProviderProps } from '../../../types/index';
import { authReducer } from "../reducers";

const initialState: AuthState = {
    isAuthorized: false,
    user: null,
    isLoading: false,
    signUp: () => {},
    logIn: () => {},
    logOut: () => {},
    restoreToken: () => {}
};

export const AuthContext = createContext<[AuthState, Dispatch<AuthAction>]>([
    initialState,
    () => {}
]);

export const useAuth = () => useContext(AuthContext)[0];

export const useAuthDispatch = () => useContext(AuthContext)[1];

export const AuthProvider = ({children}: AuthProviderProps)=> {
    return (
        <AuthContext.Provider value={useReducer(authReducer, initialState)}>
            {children}
        </AuthContext.Provider>
    )
}