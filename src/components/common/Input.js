import React from 'react';
import {TextInput, View, Text } from 'react-native';

const Input = ({label, autoCapitalize, onChangeText, placeholder, secureTextEntry, value }) => {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>
				{label}
			</Text>
			<TextInput
				autoCapitalize={autoCapitalize || 'none' }
				onChangeText={onChangeText}
				placeholder={placeholder || ''}
				secureTextEntry={secureTextEntry || false }
				value={value}
				autoCorrect={false}
				style={styles.inputStyle}	
			/>
		</View>
	)
}

const styles={
	containerStyle: {
		flex: 1,
		height: 40,
		flexDirection: 'row',
		alignItems: 'center',
	},
	labelStyle: {
		flex: 1,
		color: 'black',
		paddingLeft: 10,
		paddingRight: 10,
		fontSize: 18
	},
	inputStyle: {
		flex: 2,
		marginRight: 10,
		paddingLeft: 10,
		fontSize: 18,
		height: 30,
		borderWidth: 2,
		borderRadius: 6,
		borderColor: 'gray',
	}
}

export { Input };