const initialState = {
	firstName: '',
	lastName: '',
	phoneNumber: '',
	schedule: ''
}

export default EmpCreationReducer = (state = initialState, action) => {
	console.log(state);
	console.log(action);
	switch(action.type){
		case 'EMP_FORM_UPDATE':
		return Object.assign({}, 
			state, 
			{[action.payload.prop]: action.payload.value}
		);
		default: 
			return state;
	}
}

