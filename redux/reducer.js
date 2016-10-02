export default function reducer(state, action){
	switch(action.type) {
		case 'SHOW_SUCCESS':
			return {...state,
				success: action.payload
			}
		case 'CHANGE_STATUS':
			return {...state,
				ticket: {...state.ticket, status: action.payload}
			}
		case 'CHANGE_TYPE':
			return {...state,
				ticket: {...state.ticket, type: action.payload}
			}
		case 'FETCH_COMMENTS':
			return {...state,
				comments: action.payload
			}
		case 'FETCH_TICKET_DETAILS':
			return {...state,
				ticket: action.payload
			}
		case 'FETCH_CREATE_TICKET':
			return {...state,
				showAdd: action.showAdd
			}
		case 'FETCH_LOGOUT':
			return {
				tickets: [],
				showReg: false,
				showAdd: false,
				showDetails: false,
				user: {},
				error: '',
				success: '',
				ticket: {},
				comments: []
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
				showDetails: !state.showDetails,
				success: ''
			}
		case 'CLEAR_TICKET_AND_COMMENTS':
			return {...state,
				ticket: {},
				comments: []
			}
		case 'ERROR_CLEAR':
			return {...state,
				error: ''
			}
		default:
			return state;
	}
}