import firebase from 'firebase';
import {navigateToManagerAction} from './NavigationActions';


export const emailChange = (payload) => {
	return {
		type: 'CHANGE_EMAIL',
		payload
	}
}

export const passwordChange = (payload) => {
	return {
		type: 'CHANGE_PASSWORD',
		payload
	}
}

export const loadingChange = (payload) => {
	return {
		type: 'RECEIVE_LOADING',
		payload
	}
}

export const loginUser = (email, password) => {
	return (dispatch, navigate) => {
		dispatch(loadingChange(true));
		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(user => loginSuccess(dispatch, user))
			.catch(error => authenticateError(dispatch, error.message));
	}
}

export const registerUser = (email, password) => {
	return (dispatch) => {
		dispatch(loadingChange(true));
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(user => registerSuccess(dispatch, user))
			.catch(error => authenticateError(dispatch, error.message))
	}
}

const loginSuccess = (dispatch, user) => {
	dispatch({
		type: 'LOGIN_SUCCESS',
		payload: user
	});
	dispatch(
		navigateToManagerAction
	)

}

const registerSuccess = (dispatch, user) => {
	dispatch({
		type: 'REGISTER_SUCCESS',
		payload: 'User has registered successfully!'
	})
}

const authenticateError = (dispatch, error) => {
	dispatch({
		type: 'RECEIVE_ERROR',
		payload: error
	});
}