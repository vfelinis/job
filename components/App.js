import React from 'react'
import TicketList from './TicketList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class App extends React.Component{
	render(){
		return (
			<div className="container">
				<h1>Tickets List</h1>
				<TicketList tickets={this.props.tickets} fetch={this.props.actions.fetchTicketsAsync}/>
			</div>
		)
	}
}

function mapStateToProps(state){
	return state
}

function mapDispatchToProps(dispatch){
	return{
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)