import React from 'react';
import { View } from 'react-native';

const CardSection = props => 
	<View style={[styles.sectionStyle, props.style]}>
		{props.children}
	</View>
;

const styles = {
	sectionStyle: {
		padding: 2,
		flexDirection: 'row',
		justifyContent: 'space-between',
	}
}

export { CardSection };