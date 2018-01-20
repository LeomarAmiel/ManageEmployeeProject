import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({style, textStyle, onPress, children}) => {
	return (
		<TouchableOpacity style={style || styles.buttonStyle} onPress={onPress}>
			<Text style={ textStyle || styles.textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonStyle: {
		flex: 1,
		borderWidth: 2,
		borderColor: '#007aff',
		borderRadius: 5,
		margin: 5,
		justifyContent: 'center',
		height: 40
	},
	textStyle: {
		alignSelf: 'center',
		color: '#007aff',
		fontWeight: '600',
		fontSize: 16,
	}
})

export { Button };