export default function reducer(state, action){
	switch(action.type) {
		case 'FETCH_ERROR':
			return {...state,
				error: action.payload
			}
		case 'FETCH_LOGIN':
			return {...state,
				user: action.payload
			}
		case 'FETCH_TICKETS':
			return {...state,
				tickets: action.payload
			}
		case 'SHOW_ADD_TOGGLE':
			return {...state,
				showAdd: !state.showAdd
			}
		default:
			return state;
	}
}