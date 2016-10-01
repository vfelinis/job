import { applyMiddleware, compose, createStore} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {tickets: [], showReg: false,showAdd: false, showDetails: false, user: {}, error: '', ticket: {}}){
	return finalCreateStore(reducer, initialState)
}