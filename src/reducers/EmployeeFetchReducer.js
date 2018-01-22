export default employeeFetch = (state = [], action) => {
	switch(action.type){
		case 'EMP_FETCH_SUCCESS':
			return action.payload;

		default: 
			return state;
	}
}