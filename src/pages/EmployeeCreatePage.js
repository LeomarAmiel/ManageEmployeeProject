import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { CardSection, Input, Spinner, Button } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';

class EmployeeCreate extends Component {
	static navigationOptions = ({navigation}) => {
		if(navigation.state.params!==undefined){
			const {headerTitle} = navigation.state.params;
			return {
				headerTitle
			}
		}
		return {
			headerTitle: 'Create Employee'
		}
	}

	createEmployee () {
		this.props.employeeCreate(this.props.state);
	}

	renderButton() {
		if(this.props.edit===true){
			return(
				<Button onPress={this.createEmployee.bind(this)}>
					Save Changes
				</Button>
			)
		}
		return (
			<Button onPress={this.createEmployee.bind(this)}>
				Create
			</Button>
		);
	}

	render(){
		return (
			<View style={styles.wrapperStyle}>
				<EmployeeForm/>
				<CardSection>
					{this.renderButton()}
				</CardSection>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	if(typeof routes[routes.length-1].params==='object' && routes[routes.length-1].params!==null){
		return {
			state: state.employeeForm,
			edit: true
		}
	}
	return {
		state: state.employeeForm
	}
}

const styles = StyleSheet.create({
	wrapperStyle: {
		marginLeft: 10,
		marginRight: 10,
	}
})

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);