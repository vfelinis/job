export default function reducer(state, action){
	switch(action.type) {
		case 'FETCH_STATISTICS':
			return {...state,
				statistics: action.payload
			}
		case 'CHANGE_SLICE':
			return {...state,
				ticketsSlice: action.payload
			}
		case 'CHANGE_ZONE':
			return {...state,
				user: {...state.user, zone: action.payload}
			}
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
				comments: [],
				pages: [],
				ticketsSlice: 4
			}
		case 'ERROR':
			return {...state,
				error: action.payload
			}
		case 'FETCH_LOGIN':
			return {...state,
				success: '',
				user: action.payload
			}
		case 'FETCH_REGISTER':
			return {...state,
				showReg: action.payload,
				success: 'Вы зарегистированы! Введите логин и пароль для входа'
			}
		case 'FETCH_TICKETS':
			let countPage = Math.ceil(action.payload.length / 4)
			let page = []
			let slice = 0
			for (var i = 0; i < countPage; i++) {
				slice += 4
				page[i] = slice
			}			
			return {...state,
				tickets: action.payload,
				pages: page
			}
		case 'SHOW_ADD_TOGGLE':
			return {...state,
				showAdd: !state.showAdd
			}
		case 'SHOW_REG_TOGGLE':
			return {...state,
				showReg: !state.showReg,
				success: ''
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
		case 'SHOW_STATISTICS_TOGGLE':
			return {...state,
				showStatistics: !state.showStatistics
			}
		default:
			return state;
	}
}