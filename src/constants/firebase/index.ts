export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY;

export const FIREBASE_AUTH_BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

export const FIREBASE_API_AUTH_SIGN_UP_URL = `:signUp?key=${FIREBASE_API_KEY}`;

export const FIREBASE_API_AUTH_LOGIN_URL = `:signInWithPassword?key=${FIREBASE_API_KEY}`;