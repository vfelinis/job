export default function reducer(state, action){
	switch(action.type) {
		case 'FETCH_LOGOUT':
			return {...state,
				user: {}
			}
		case 'FETCH_ERROR_LOGIN':
			return {...state,
				error: {...state.error, login: action.payload}
			}
		case 'FETCH_ERROR_REGISTER':
			return {...state,
				error: {...state.error, register: action.payload}
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
		case 'ERROR_CLEAR':
			return {...state,
				error: {login: '', register: ''}
			}
		default:
			return state;
	}
}