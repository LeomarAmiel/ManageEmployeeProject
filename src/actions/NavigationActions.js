import { NavigationActions } from 'react-navigation'

export const navigateToLoginAction =	NavigationActions.navigate({routeName: 'Home'});
export const navigateToRegisterAction =	NavigationActions.navigate({routeName: 'Register'});
export const navigateToManagerAction =	NavigationActions.navigate({routeName: 'Manager'});
export const navigateToEmployeeCreateAction = NavigationActions.navigate({routeName: 'EmployeeCreate'});