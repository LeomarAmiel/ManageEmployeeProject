import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeCreate, employeeSaveChanges } from '../actions';
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
		this.props.employeeCreate(this.props.employeeForm);
	}

	saveChanges () {
		this.props.employeeSaveChanges(this.props.employeeForm, this.props.index);
	}

	renderButton() {
		if(this.props.edit){
			return(
				<CardSection>
					<Button onPress={() => Communications.text(
						this.props.employeeForm.phoneNumber, 
						`Your shift will start ${this.props.employeeForm.schedule}`
					)}>
					Text
					</Button>
					<Button onPress={this.saveChanges.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
			)
		}
		return (
			<CardSection>
				<Button onPress={this.createEmployee.bind(this)}>
					Create
				</Button>
			</CardSection>
		);
	}

	render(){
		return (
			<View style={styles.wrapperStyle}>
				<EmployeeForm/>
				{this.renderButton()}
			</View>
		)
	}
}

const mapStateToProps = ({employeeForm, nav}) => {
	const {routes} = nav;
	if(typeof routes[routes.length-1].params==='object' && routes[routes.length-1].params!==null){
		return {
			employeeForm,
			edit: true, 
			index: routes[routes.length-1].params.index
		}
	}
	return {
		employeeForm
	}
}

const styles = StyleSheet.create({
	wrapperStyle: {
		marginLeft: 10,
		marginRight: 10,
	}
})

export default connect(mapStateToProps, { employeeCreate, employeeSaveChanges })(EmployeeCreate);