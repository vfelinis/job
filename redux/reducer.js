export default function reducer(state, action){
	switch(action.type) {
		case 'FETCH_TICKETS':
			return {...state,
				tickets: action.payload
			}
		default:
			return state;
	}
}