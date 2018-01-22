import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { CardSection, Input, Spinner, Button } from '../components/common';

class EmployeeCreate extends Component {

	createEmployee () {
		this.props.employeeCreate(this.props.state);
	}

	render(){
		const { firstName, lastName, phoneNumber, schedule } = this.props.state;
		return (
			<View style={styles.wrapperStyle}>
				<CardSection>
					<Input label='First Name'
					value={firstName}
					onChangeText={(firstName) => this.props.employeeUpdate({
						prop: 'firstName',
						value: firstName
					})}
					/>
				</CardSection>
				<CardSection>
					<Input label='Last Name'
					value={lastName}
					onChangeText={(lastName) => this.props.employeeUpdate({
						prop: 'lastName',
						value: lastName
					})}
					/>
				</CardSection>
				<CardSection>
					<Input label='Contact Number'
					value={phoneNumber}
					onChangeText={(phoneNumber) => this.props.employeeUpdate({
						prop: 'phoneNumber',
						value: phoneNumber
					})}
					/>
				</CardSection>
				<CardSection style={styles.pickerContainerStyle}>
					<Text style={styles.pickerLabelStyle}>
						Shift
					</Text>
					<Picker
						selectedValue={schedule}
						onValueChange={(schedule) => this.props.employeeUpdate({
							prop: 'schedule',
							value: schedule
						})}
					>
						<Picker.Item label='Monday' value='Monday'/>
						<Picker.Item label='Tuesday' value='Tuesday'/>
						<Picker.Item label='Wednesday' value='Wednesday'/>
						<Picker.Item label='Thursday' value='Thursday'/>
						<Picker.Item label='Friday' value='Friday'/>
						<Picker.Item label='Saturday' value='Saturday'/>
						<Picker.Item label='Sunday' value='Sunday'/>
					</Picker>
				</CardSection>
				<CardSection>
					<Button onPress={this.createEmployee.bind(this)}>
						Create
					</Button>
				</CardSection>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state: state.employeeForm
	}
}

const styles = StyleSheet.create({
	wrapperStyle: {
		marginLeft: 10,
		marginRight: 10,
	},
	pickerContainerStyle: {
		flexDirection: 'column',
	},
	pickerLabelStyle: {
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 18
	},
	buttonStyle: {
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: '#007aff',
		borderRadius: 5,
	}
})

export default connect(mapStateToProps, { employeeUpdate, employeeCreate })(EmployeeCreate);