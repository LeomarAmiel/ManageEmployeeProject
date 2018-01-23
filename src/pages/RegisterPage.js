import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, CardSection, Input, Spinner } from '../components/common';
import { connect } from 'react-redux'
import { emailChange, passwordChange, registerUser } from "../actions";

class RegisterForm extends Component {
	renderButton(){
		if(this.props.loginForm.loading){
			return <Spinner/>
		} 
		return <Button onPress={this.onButtonPress.bind(this)}>Register</Button>
	}

	renderError(){
		if(this.props.loginForm.error){
			return <Text style={styles.errorTextStyle}>{this.props.loginForm.error}</Text>
		} else if (this.props.loginForm.success){
			return <Text style={styles.successTextStyle}>{this.props.loginForm.success}</Text>
		}
		return null;
	}

	onButtonPress(){
		this.props.registerUser(this.props.loginForm.email, this.props.loginForm.password);
	}

	render(){
		let { email, password } = this.props.loginForm;
		return(
			<View style={styles.containerLoginStyle}>
				<CardSection>
					<Input label='Email'
						onChangeText={(email) => this.props.emailChange(email)} 
						value={email}
					/>
				</CardSection>
				<CardSection>
					<Input label='Password'
						onChangeText={(password) => this.props.passwordChange(password)} 
						value={password}
						secureTextEntry={true}
					/>
				</CardSection>
				<CardSection>
					{this.renderError()}
				</CardSection>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	containerLoginStyle: {
		margin: 10,
		borderWidth: 1,
		borderRadius: 8
	},
	errorTextStyle: {
		marginLeft: 10,
		marginRight: 10,
		color: 'red'
	},
	successTextStyle: {
		marginLeft: 10,
		marginRight: 10,
		color: 'green'
	}
})

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps, { 
	emailChange, passwordChange, registerUser
})(RegisterForm);