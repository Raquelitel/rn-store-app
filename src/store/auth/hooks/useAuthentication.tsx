import { AuthActionTypes } from "../../../enums";
import { useAuth, useAuthDispatch } from "../context"
import { AuthUserForm } from '../../../types/index';
import { restoreToken } from '../actions/index';


export const useAuthentication = () => {
    const state = useAuth();
    const dispatch = useAuthDispatch();

    const logIn = async ({email, password}: AuthUserForm) => {
        // TODO: Call API
        console.log("haciendo login...", email, password);

        dispatch({
            type: AuthActionTypes.LOG_IN,
            payload: {token: '1123123123ñlkajñsdlkfj'}
        });
    };

    const signUp = async ({email, password}: AuthUserForm) => {
        // TODO; Call API
        console.log("sign up", email, password)

        dispatch({
            type: AuthActionTypes.SIGN_UP,
            payload: {token: '123123ñaslkdjfñlk'}
        });
    };

    const logOut = async () => {
        dispatch({
            type: AuthActionTypes.LOG_OUT
        });
    };

    const restoreToken = async () => {
        try {
        // TODO: const token = await AsyncStorage.getItem('token') 
        let token = ''
        if(token) {
            dispatch({
                type: AuthActionTypes.RESTORE_TOKEN,
                payload: {token: 'el constToken'}
            })
        }
        } catch (error) {
            console.log("error", error);
            
        }
    }
    return {
        ...state,
        logIn,
        logOut,
        signUp,
        restoreToken
    };
}