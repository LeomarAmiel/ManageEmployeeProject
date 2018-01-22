import firebase from 'firebase';
import {db} from '../../firebase';
import { NavigationActions } from 'react-navigation'

export const employeeUpdate = ({prop, value}) => {
	return {
		type: 'EMP_FORM_UPDATE',
		payload: {prop, value}
	}
}

export const employeeCreate = ({firstName, lastName, phoneNumber, schedule }) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		gg = db.collection('users').doc(currentUser.uid).get()
		.then(data => {
			let { employees } = data.data();
			employees.push({firstName, lastName, phoneNumber, schedule});
			db.collection('users').doc(currentUser.uid).set({employees});
			dispatch(NavigationActions.back());
			dispatch({
				type: 'EMP_CREATED'
			})
		})
		.catch(error => console.error(error));
	}
}

export const employeeListFetch = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		gg = db.collection('users').doc(currentUser.uid).get()
		.then(data => {
			let { employees } = data.data();
			dispatch({ type: 'EMP_FETCH_SUCCESS' })
		})
		.catch(error => console.error(error));
	}
}