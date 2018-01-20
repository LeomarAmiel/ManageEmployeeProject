import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{props.headerText}</Text>
		</View>
	);
}

const styles = {
	textStyle: {
		fontSize: 24,
		color: 'white'
	},
	viewStyle: {
		paddingTop: 40,
		padding: 20,
		backgroundColor: 'black',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export {Header};