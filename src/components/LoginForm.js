import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, CardSection, Input, Spinner } from './common';
import { connect } from 'react-redux'
import { emailChange, passwordChange, loginUser } from "../actions";

class LoginForm extends Component {
	renderButton(){
		if(this.props.loginForm.loading){
			return <Spinner/>
		} 
		return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
	}

	renderError(){
		if(this.props.loginForm.error){			
			return <Text style={styles.errorStyle}>{this.props.loginForm.error}</Text>
		}
		return null;
	}
	
	onButtonPress(){
		this.props.loginUser(this.props.loginForm.email, this.props.loginForm.password);
	}


	render(){
		let { email, password } = this.props.loginForm;
		return(
			<View style={styles.containerLoginStyle}>
				<CardSection>
					<Input label='Email'
						placeholder='john@example.com' 
						onChangeText={(email) => this.props.emailChange(email)} 
						value={email}
					/>
				</CardSection>
				<CardSection>
					<Input label='Password'
						placeholder='password'
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
	errorStyle: {
		marginLeft: 10,
		marginRight: 10,
		color: 'red'
	}
})

const mapStateToProps = (state) => {
	return state;
}

export default connect(mapStateToProps, { 
	emailChange, passwordChange, loginUser
})(LoginForm);