import React, { Component } from 'react';
import { Button, Text, View, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../components/common/'
import EmployeeItem from '../components/EmployeeItem'
import { navigateToEmployeeCreateAction, employeeListFetch, navigateToEmployeeEditAction } from '../actions';

class ManagerPage extends Component {
	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state;
		return {
			headerLeft: null,
			headerRight: <Button title="Add" onPress={ () => params.navigateToEmployeeCreate() } />
		}
	}

	componentWillMount(){
		this.props.navigation.setParams({navigateToEmployeeCreate: this.navigateToEmployeeCreate.bind(this)});
		this.props.employeeListFetch();
	}

	navigateToEmployeeCreate = () => {
		this.props.navigation.dispatch(navigateToEmployeeCreateAction);
	}

	navigateToEmployeeEdit = (index) => {
		let params = Object.assign({}, this.props.empList[index], {headerTitle: 'Edit Employee'}, {index});
		this.props.navigateToEmployeeEditAction(params);
	}

	render(){
		return (
			<View style={{flex: 1}}>
				<FlatList 
				data={this.props.empList} 
				keyExtractor={(data, index) => index}
				renderItem={({item, index}) => <EmployeeItem onPress={() => this.navigateToEmployeeEdit(index)}>{item.firstName} {item.lastName}</EmployeeItem>}
				/>
			</View>
		);
	}
}

const mapStateToProps = ({empList}) => {
	return {
		empList
	}
}


export default connect(mapStateToProps, { 
	navigateToEmployeeCreateAction, 
	employeeListFetch,
	navigateToEmployeeEditAction
})(ManagerPage);