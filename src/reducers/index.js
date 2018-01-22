import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import EmployeeCreationReducer from './EmployeeCreationReducer';

export default combineReducers({
	nav: NavigationReducer,
	loginForm: LoginReducer,
	employeeForm: EmployeeCreationReducer,
})