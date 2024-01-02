import { Dispatch } from 'react';
import { AuthAction, AuthUser, AuthUserForm } from '../../types/index';
import { AuthActionTypes } from '../../enums';

export const login = ({email, password}: AuthUserForm) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            dispatch({type: AuthActionTypes.LOG_IN_REQUEST});
            // const response = await fetch('hhtp://localhost:3000/api/auth/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({email, password})
            // });

            // const data = response.json();

            const data: AuthUser = {
                token: '123121312312'
            };

            if(!data) {
                dispatch({type: AuthActionTypes.LOG_IN_ERROR, payload: 'error'})
            }

            dispatch({type: AuthActionTypes.LOG_IN_SUCCESS, payload: data})

        } catch (error) {
            dispatch({type: AuthActionTypes.LOG_IN_ERROR, payload: 'error'})

        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<AuthAction>) => {
        try {
            // TODO: llamada a la API
            dispatch({type: AuthActionTypes.LOG_OUT_REQUEST});
            dispatch({type: AuthActionTypes.LOG_OUT_SUCCESS});

        } catch (error) {
            dispatch({type: AuthActionTypes.LOG_OUT_ERROR, payload: `Error: ${error}`});
        }

    }
}