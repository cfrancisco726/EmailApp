import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');
	dispatch({ type: FETCH_USER, payload: res.data });
};

// export const fetchUser = () => {
// 1 expression you can move the {} and remove return
// 	return function(dispatch) {
// 		axios
// 			.get('/api/current_user')
// 			.then(res => dispatch({ type: FETCH_USER, payload: res }));
// 	};
// };
// refactored

// with out dispatch
// const fetchUser = () => {
// 	const request = axios.get('/api/current_user');
//
// 	return {
// 		type: FETCH_USER,
// 		payload: request
// 	};
// };

export const handleToken = token => async dispatch => {
	const res = await axios.post('/api/stripe', token);
	dispatch({ type: FETCH_USER, payload: res.data });
};