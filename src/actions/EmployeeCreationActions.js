export const employeeUpdate = ({prop, value}) => {
	return {
		type: 'EMP_FORM_UPDATE',
		payload: {prop, value}
	}
}