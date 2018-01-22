import React, { Component } from 'react';
import { Button, Text, View, FlatList, StyleSheet } from 'react-native';
import { CardSection } from '../components/common/'
import { connect } from 'react-redux';
import { navigateToEmployeeCreateAction, employeeListFetch } from '../actions';

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

	render(){
		return (
			<View style={{flex: 1}}>
				<FlatList 
				data={this.props.empList} 
				keyExtractor={(data, index) => index}
				renderItem={({item}) => 
					<CardSection style={styles.itemContainerStyle}>
						<Text style={styles.itemStyle}>{item.firstName} {item.lastName}</Text>
					</CardSection>}/>
			</View>
		);
	}
}

const mapStateToProps = ({empList}) => {
	return {
		empList
	}
}

const styles = StyleSheet.create({
	itemContainerStyle: {
		borderBottomWidth: 2
	},
	itemStyle: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		fontSize: 18
	}
})

export default connect(mapStateToProps, { 
	navigateToEmployeeCreateAction, 
	employeeListFetch 
})(ManagerPage);