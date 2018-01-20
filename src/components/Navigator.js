import { StackNavigator } from 'react-navigation';
import { connect } from 'react-redux'
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import ManagerPage from '../pages/ManagerPage';
import EmployeeCreatePage from '../pages/EmployeeCreatePage';

const Navigator = StackNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      headerTitle: 'Login',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    },
  },
  Register: {
    screen: RegisterPage,
    navigationOptions: {
      headerTitle: 'Register',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  Manager: {
    screen: ManagerPage,
    navigationOptions: {
      headerTitle: 'Employees',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  },
  EmployeeCreate: {
    screen: EmployeeCreatePage,
    navigationOptions: {
      headerTitle: 'Create Employee',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'black'
      }
    }
  }
})

export default Navigator;