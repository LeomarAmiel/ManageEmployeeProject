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
		db.collection('users').doc(currentUser.uid).get()
		.then(data => {
			let { employees } = data.data();
			employees.push({firstName, lastName, phoneNumber, schedule});
			db.collection('users').doc(currentUser.uid).set({employees});
			dispatch({
				type: 'EMP_CREATED'
			})
			dispatch(NavigationActions.back());
		})
		.catch(error => console.error(error));
	}
}

export const employeeListFetch = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		db.collection('users').doc(currentUser.uid).onSnapshot((data) => {
			let { employees } = data.data();
			dispatch({ type: 'EMP_FETCH_SUCCESS', payload: employees });
		});
	}
}

export const employeeSaveChanges = ({firstName, lastName, phoneNumber, schedule}, index) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		db.collection('users').doc(currentUser.uid).get()
		.then(data => {
			let { employees } = data.data();
			employees[index] = {
				firstName,
				lastName,
				phoneNumber,
				schedule
			}
			db.collection('users').doc(currentUser.uid).set({employees});
			dispatch({
				type: 'EMP_UPDATED'
			})
			dispatch(NavigationActions.back());	
		})
		.catch(error => console.error(error));
	}
}

export const employeeFire = (index) => {
	const { currentUser } = firebase.auth();

	return (dispatch) => {
		db.collection('users').doc(currentUser.uid).get()
		.then(data => {
			console.log(index);
			let { employees } = data.data();
			
			db.collection('users').doc(currentUser.uid).set({employees: employees.slice(0, index).concat(employees.slice(index+1, employees.length-1))});
			dispatch({
				type: 'EMP_DELETED'
			})
			dispatch(NavigationActions.back());
		})
		.catch(error => console.error(error));
	}
}