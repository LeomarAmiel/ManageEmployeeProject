import React, { Component } from 'react';
import { Text, View, StatusBar } from 'react-native';
import firebase from 'firebase';

import LoginForm from '../components/LoginForm'
import AddManagerButton from '../components/AddManagerButton'

export default class App extends Component{
	componentWillMount(){
		  let config = {

		  };
		  firebase.initializeApp(config);
	}
	
	render() {
	  return (
		<View style={{flex: 1, justifyContent: 'space-between'}}>
			<LoginForm onLogin={this.props.navigation}/>
			<AddManagerButton/>
		</View>
	  );
	}
  }