import { applyMiddleware, compose, createStore} from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
	applyMiddleware(thunk, logger())
)(createStore)

export default function configureStore(initialState = {tickets: [], showAdd: false, user: null, error: ''}){
	return finalCreateStore(reducer, initialState)
}