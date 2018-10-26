import { 
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return({
        type: EMAIL_CHANGED,
        payload: text
    });
}

export const passwordChanged = (text) => {
    return({
        type: PASSWORD_CHANGED,
        payload: text
    });
}

export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: LOGIN_USER });

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => loginUserSuccess(dispatch, user))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginUserSuccess(dispatch, user))
                .catch((error) => loginUserFail(dispatch, error));
        });
    };
}

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
}

const loginUserFail = (dispatch, error) => {
    console.log(error);
    dispatch({ type: LOGIN_USER_FAIL });
}