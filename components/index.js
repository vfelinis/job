import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import configureStore from '../redux/store'
import {Provider} from 'react-redux'


let store = configureStore()

ReactDom.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('my-app')
)