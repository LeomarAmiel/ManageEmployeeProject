import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';

import LoginForm from '../components/LoginForm'
import AddManagerButton from '../components/AddManagerButton'

export default class App extends Component{
	
	render() {
	  return (
		<View style={{flex: 1, justifyContent: 'space-between'}}>
			<LoginForm onLogin={this.props.navigation}/>
			<AddManagerButton/>
		</View>
	  );
	}
  }