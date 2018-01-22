import Navigator from '../components/Navigator';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Home'));

export default navReducer = (state = initialState, action) => {
	console.log(state);
	console.log(action);
	const nextState = Navigator.router.getStateForAction(action, state);
	return nextState || state;
}