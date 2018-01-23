import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { CardSection, Button } from './index';

const Confirm = ({visible, children, onConfirm, onReject}) => {
	return (
			<Modal 
				visible={visible}
				transparent
				animationType='fade'
				onRequestClose={() => {}}
				>
				<View style={styles.containerStyle}>
					<CardSection style={styles.cardsectionStyle}>
						<CardSection style={styles.textContainerStyle}>
							<Text style={styles.textStyle}>
								{children}
							</Text>
						</CardSection>
						<CardSection>
							<Button onPress={onConfirm}>
								Yes
							</Button>
							<Button onPress={onReject}>
								No
							</Button>
						</CardSection>
					</CardSection>
				</View>
			</Modal>
	)
}

const styles = StyleSheet.create({
	containerStyle: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center',
	},
	cardsectionStyle: {
		margin: 20,
		padding: 10,
		backgroundColor: 'white',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	textContainerStyle:{
		alignSelf: 'center'
	},
	textStyle: {
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 35
	}
})

export { Confirm };