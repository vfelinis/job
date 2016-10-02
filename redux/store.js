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
	user: {},
	error: '',
	success: '',
	ticket: {},
	comments: [],
	pagination: 1
}

export default function configureStore(initialState = state){
	return finalCreateStore(reducer, initialState)
}