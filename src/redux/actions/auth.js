import { types } from "../types/types";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { auth } from "../../../firebase-config";

//import { setError } from './ui';
/* Login and Google Login actions */
export const startLoginEmailPass = ( data ) => {
    return (dispatch) => {
        signInWithEmailAndPassword(auth, data.username, data.password)
        .then(({ user }) => {
            dispatch( login( user.uid, user.displayName ) ); 
        })
        .catch((error) => {
            alert(error.message)
        });
    }
}

export const startGoogleLogin = ( { idToken } ) => {
    return (dispatch) => {
        signInWithCredential(GoogleAuthProvider.credential(idToken))
        .then(( { user } ) => {
            dispatch( login(user.uid, user.displayName) );  
        })
    }
}

export const login = ( uid, displayName ) => ({
    type: types.login,
    payload: {
        uid,
        displayName
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