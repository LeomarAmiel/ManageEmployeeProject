import { NavigationActions } from 'react-navigation';

export const navigateToLoginAction =	NavigationActions.navigate({routeName: 'Home'});
export const navigateToRegisterAction =	NavigationActions.navigate({routeName: 'Register'});
export const navigateToEmpListAction =	NavigationActions.navigate({routeName: 'EmployeeList'});
export const navigateToEmployeeCreateAction = NavigationActions.navigate({routeName: 'EmployeeCreate'});
export const navigateToEmployeeEditAction = (params) => 
	NavigationActions.navigate({routeName: 'EmployeeCreate', params})