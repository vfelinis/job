import React from 'react'
import Authorized from './Authorized'
import NotAuthorized from './NotAuthorized'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class App extends React.Component{
	render(){
		return (
			<div className="container">
				{ this.props.user ?
					<Authorized
					  user= {this.props.user}
					  tickets={this.props.tickets}
					  fetchTickets={this.props.actions.fetchTicketsAsync}
					  handleShowAddToggle={this.props.actions.handleShowAddToggle}
					/> :
					<NotAuthorized
					  error={this.props.error}
					  fetchLogin={this.props.actions.fetchLoginAsync}
					/>
				}
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