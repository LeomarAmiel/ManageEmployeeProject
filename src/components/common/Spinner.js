import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
	return(
		<View style={styles.containerStyle}>
			<ActivityIndicator size={props.size || 'small'} color='black'/>
		</View>
	);
}

const styles = {
	containerStyle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export { Spinner };