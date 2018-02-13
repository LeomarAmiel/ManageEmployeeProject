import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { employeeCreate, employeeSaveChanges, employeeFire } from '../actions';
import { CardSection, Input, Spinner, Button, Confirm } from '../components/common';
import EmployeeForm from '../components/EmployeeForm';

class EmployeeCreate extends Component {
	state = {
		onVisibleModal: false
	}
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

	employeeFire () {
		this.props.employeeFire(this.props.index);
	}

	renderButton() {
		if(this.props.edit){
			return(
				<CardSection style={{flexDirection: 'column'}}>
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
					<CardSection>
						<Button onPress={() => this.setState({ onVisibleModal: !this.state.onVisibleModal })}>
							Fire
						</Button>
					</CardSection>
					<Confirm
						visible={this.state.onVisibleModal}
						onConfirm={() => {}}
						onReject={() => this.setState({onVisibleModal: !this.state.onVisibleModal})}
						onConfirm={this.employeeFire.bind(this)}
					>
					Are you sure you want to fire this employee?
				</Confirm>
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

export default connect(mapStateToProps, { 
	employeeCreate, 
	employeeSaveChanges,
	employeeFire
})(EmployeeCreate);