import React, { Component } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, Spinner, Button } from '../components/common';
import { employeeUpdate } from '../actions';


const EmployeeForm = (props) => {
	const { firstName, lastName, phoneNumber, schedule } = props.employee;
	return (
		<View>
			<CardSection>
				<Input label='First Name'
				value={firstName}
				onChangeText={(firstName) => props.employeeUpdate({
					prop: 'firstName',
					value: firstName
				})}
				/>
			</CardSection>
			<CardSection>
				<Input label='Last Name'
				value={lastName}
				onChangeText={(lastName) => props.employeeUpdate({
					prop: 'lastName',
					value: lastName
				})}
				/>
			</CardSection>
			<CardSection>
				<Input label='Contact Number'
				value={phoneNumber}
				onChangeText={(phoneNumber) => props.employeeUpdate({
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
					onValueChange={(schedule) => props.employeeUpdate({
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
		</View>
	);
}
const styles = StyleSheet.create({
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
});

const mapStateToProps = ({employeeForm, nav}) => {
	const {routes} = nav;
	console.log(routes);
	if(typeof routes[routes.length-1].params==='object' && routes[routes.length-1].params!==null){
		
	}
	return {
		employee: employeeForm,
	}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm);