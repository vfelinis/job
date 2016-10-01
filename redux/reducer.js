export default function reducer(state, action){
	switch(action.type) {
		case 'FETCH_TICKET_DETAILS':
			return {...state,
				ticket: action.payload
			}
		case 'FETCH_CREATE_TICKET':
			return {...state,
				showAdd: action.showAdd
			}
		case 'FETCH_LOGOUT':
			return {...state,
				user: {},
				tickets: []
			}
		case 'ERROR':
			return {...state,
				error: action.payload
			}
		case 'FETCH_LOGIN':
			return {...state,
				user: action.payload
			}
		case 'FETCH_REGISTER':
			return {...state,
				showReg: action.payload
			}
		case 'FETCH_TICKETS':
			return {...state,
				tickets: action.payload
			}
		case 'SHOW_ADD_TOGGLE':
			return {...state,
				showAdd: !state.showAdd
			}
		case 'SHOW_REG_TOGGLE':
			return {...state,
				showReg: !state.showReg
			}
		case 'SHOW_DETAILS_TOGGLE':
			return {...state,
				showDetails: !state.showDetails
			}
		case 'ERROR_CLEAR':
			return {...state,
				error: ''
			}
		default:
			return state;
	}
}