import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import NavigationReducer from './NavigationReducer';
import EmployeeCreationReducer from './EmployeeCreationReducer';
import EmployeeFetchReducer from './EmployeeFetchReducer';

export default combineReducers({
	nav: NavigationReducer,
	empList: EmployeeFetchReducer,
	loginForm: LoginReducer,
	employeeForm: EmployeeCreationReducer,
})