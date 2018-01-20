import React, { Component } from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { navigateToEmployeeCreateAction } from '../actions';

class ManagerPage extends Component {
	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state;
		return {
			headerLeft: null,
			headerRight: <Button title="Add" onPress={ () => params.navigateToEmployeeCreate() } />
		}
	}

	componentWillMount(){
		this.props.navigation.setParams({navigateToEmployeeCreate: this.navigateToEmployeeCreate.bind(this)})
	}

	navigateToEmployeeCreate = () => {
		this.props.dispatch(navigateToEmployeeCreateAction);
	}

	render(){
		return (
			<View>
			</View>
		);
	}
}

export default connect()(ManagerPage);