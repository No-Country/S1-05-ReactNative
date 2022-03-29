//import { auth, googleAuthProvider, signInWithPopup } from 'base/firebase-config';

import { types } from "../types/types";
//import { setError } from './ui';

/* Login and Google Login actions */
export const startLoginEmailPass = ( username, password) => {
    return (dispatch) => {
        dispatch( login( username, password ) );
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {

        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                console.log(user)
                dispatch(
                    login(user.uid, user.displayName)
                )
            });
    }
}

export const login = ( displayName, password ) => ({
    type: types.login,
    payload: {
        displayName,
        password
    }
});

/* Register actions */
/*
export const startRegister = (firstName, userName, lastName, email, password, navigate) => {
    return (dispatch) => {
        signupUser(userName, firstName, lastName, email, password)
        .then( () => {
            console.log("User register successfully");

            dispatch(register(firstName, userName, lastName, email, password));

            dispatch(startLoginEmailPass(email, password, navigate));
            
        }).catch(() => {
            dispatch(setError( "User with this Email already exists." ));
        });
    }
}

export const register = (firstName, userName, email, password) => ({
    type: types.register,
    payload: {
        firstName,
        userName,
        email,
        password
    }
})
*/

/* Logout actions */
export const startLogout = () => {
    return (dispatch) => {
        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout,
    payload: {}
})