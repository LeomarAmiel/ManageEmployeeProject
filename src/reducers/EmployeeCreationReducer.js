const initialState = {
	firstName: '',
	lastName: '',
	phoneNumber: '',
	schedule: 'Monday'
}

export default EmpCreationReducer = (state = initialState, action) => {
	switch(action.type){
		case 'EMP_FORM_UPDATE':
			return Object.assign({}, 
				state, 
				{[action.payload.prop]: action.payload.value}
			);
		case 'EMP_CREATED':
			return initialState;
		case 'EMP_UPDATED': 
			return initialState;
		case 'EMP_DELETED': 
			return initialState;
		default: 
			return state;
	}
}

