import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Button } from './common';
import { navigateToRegisterAction } from '../actions'

class AddManager extends Component {
	 navigateToRegister = () => {
		 this.props.dispatch(navigateToRegisterAction);
	 }

	render(){
		return (
			<View style={styles.containerFlexStyle}>
				<Button style={styles.containerButtonStyle} onPress={this.navigateToRegister} textStyle={styles.textStyle}>
					&#10010;
				</Button>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	containerFlexStyle: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginBottom: 20,
		marginRight: 20
	},
	containerButtonStyle:{
		backgroundColor: 'black',
		borderWidth: 2,
		borderRadius: 35,
		height: 60,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
	},
	textStyle: {
		color: 'white',
		fontSize: 24
	}
})

export default connect()(AddManager);