import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Button, CardSection } from './common';


export default class EmployeeItem extends Component{

	
	render(){
		return (
			<CardSection style={styles.itemContainerStyle}>
				<TouchableOpacity style={styles.itemStyle} onPress={this.props.onPress}>
					<Text style={styles.textStyle}>{this.props.children}</Text>
					<Text style={styles.textStyle}> > </Text>
				</TouchableOpacity>
			</CardSection>
		);
	}
}

const styles = StyleSheet.create({
	itemContainerStyle: {
		borderBottomWidth: 2,
	},
	itemStyle: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 14,
		marginRight: 20,
		marginTop: 10,
	},
	textStyle: {
		fontSize: 20
	}
}) 