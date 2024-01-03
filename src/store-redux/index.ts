// import {combineReducers, createStore, applyMiddleware} from 'redux';
// import {thunk} from 'redux-thunk';
// import { authReducer } from './reducers/auth';
// import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';


// const rootReducer = combineReducers({
//     auth: authReducer,
// });

// // createStore está deprecated porque se aconseja usar Redux Toolkit
// export const store = createStore(rootReducer,applyMiddleware(thunk));

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch | any;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;