import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import EmployeeCreationReducer from './EmployeeCreationReducer';

export default combineReducers({
	loginForm: LoginReducer,
	employeeForm: EmployeeCreationReducer,
	nav: NavigationReducer,
})