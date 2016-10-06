import { applyMiddleware, compose, createStore} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk, logger())
)(createStore)

let state = {
	tickets: [],
	showReg: false,
	showAdd: false,
	showDetails: false,
	showStatistics: false,
	user: {},
	error: '',
	success: '',
	ticket: {},
	comments: [],
	pages: [],
	ticketsSlice: 4,
	countTickets: [],
	avgDaysPublic: 0,
	avgDaysFirst: 0
}

export default function configureStore(initialState = state){
	return finalCreateStore(reducer, initialState)
}