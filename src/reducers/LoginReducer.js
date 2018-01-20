const initialState = {
	email: '',
	password: '',
	success: '',
	error: null,
	loading: null,
	user: null
}

export default LoginReducer = (state = initialState, action) => {
	switch(action.type){
		case 'CHANGE_EMAIL':
			return Object.assign({}, state, {
				email: action.payload
			});
		case 'CHANGE_PASSWORD':
			return Object.assign({}, state, {
				password: action.payload
			});
		case 'RECEIVE_ERROR':
			return Object.assign({}, state, {
				error: action.payload,
				loading: false
			});
		case 'RECEIVE_LOADING':
			return Object.assign({}, state, {
				loading: action.payload,
				error: ''
			});
		case 'LOGIN_SUCCESS':
			return Object.assign({}, initialState, {
				user: action.payload
			});
		case 'REGISTER_SUCCESS':
			return Object.assign({}, initialState, {
				success: action.payload
			});
			
		default: 
			return state;
	}
}