import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { AuthActionTypesToolkit } from '../../../enums';
import { AuthState, AuthUser } from '../../../types';

const initialState: AuthState = {
    isAuthorized: false,
    user: null,
    isLoading: false,
    isError: false,
    error: null,
};

export const logIn = createAsyncThunk(
    `auth/${AuthActionTypesToolkit.LOG_IN}`,
    async (payload: {email: string, password: string}, thunkAPI) => {
        try {
            // Aquí se hace la llamada a la ap
            const data: AuthUser | null = {
                token: '1232132312321'
            };

            return data;

        } catch (error: unknown) {
            return thunkAPI.rejectWithValue(`Error: ${error}`)
        }
    }
)

export const logOut = createAsyncThunk(
    `auth/${AuthActionTypesToolkit.LOG_OUT}`,
    async (_, thunkAPI) => {
        try {
            // Aquí se hace la llamada a la ap

        return thunkAPI.fulfillWithValue(null);

        } catch (error: unknown) {
            return thunkAPI.rejectWithValue(`Error: ${error}`)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logIn.pending, state  => {
            state.isLoading = true;
        });
        builder.addCase(logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthorized = true;
            state.user = action.payload
        });
        builder.addCase(logIn.rejected, (state, action) => {
            state.user = null;
            state.isAuthorized = false;
            state.isError = true;
            state.error = action.payload;
        });

        builder.addCase(logOut.pending, state  => {
            state.isLoading = true;
        });
        builder.addCase(logOut.fulfilled, state => {
            state.isLoading = false;
            state.isAuthorized = false;
            state.user = null;
        });
        builder.addCase(logOut.rejected, (state, action) => {
            state.user = null;
            state.isError = true;
            state.error = action.payload;
        });
    },
})

export default authSlice.reducer;
