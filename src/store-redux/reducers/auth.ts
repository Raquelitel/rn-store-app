// import { AuthActionTypes } from "../../enums";
// import { AuthAction } from "../../types";

// const initialState = {
//     isAuthorized: false,
//     user: null,
//     isLoading: false,
//     isError: false,
//     error: null,
// };


// export const authReducer = (state = initialState, action: AuthAction) => {
//     switch(action.type) {
//        case AuthActionTypes.LOG_IN_REQUEST:
//         return {
//             ...state,
//             isLoading: true,
//         };
//         case AuthActionTypes.LOG_IN_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isAuthorized: true,
//                 user: action.payload
//             };
//         case AuthActionTypes.LOG_IN_ERROR:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isAuthorized: false,
//                 isError: true,
//                 error: action.payload
//             };
//         case AuthActionTypes.LOG_OUT_REQUEST:
//             return {
//                 ...state,
//                 isLoading: true,
//             };
//         case AuthActionTypes.LOG_OUT_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 user: null,
//                 isAuthorized: false,
//             };
//         case AuthActionTypes.LOG_OUT_ERROR:
//             return {
//                 ...state,
//                 isLoading: false,
//                 user: null,
//                 isAuthorized: false,
//                 isError: false,
//                 error: 'error logout'
//             }
//         default: 
//         return state;
//     }
// }