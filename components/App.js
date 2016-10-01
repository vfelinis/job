import React from 'react'
import Authorized from './Authorized'
import NotAuthorized from './NotAuthorized'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'

class App extends React.Component{
	componentDidMount(){
		this.props.actions.fetchSessionAsync()
	}
	render(){
		return (
			<div className="container">
				{ 'id' in this.props.user ?
					<Authorized
					  user= {this.props.user}
					  tickets={this.props.tickets}
					  showAdd={this.props.showAdd}
					  error={this.props.error}
					  showDetails={this.props.showDetails}
					  ticket={this.props.ticket}
					  fetchTickets={this.props.actions.fetchTicketsAsync}
					  fetchLogout={this.props.actions.fetchLogoutAsync}
					  fetchCreateTicket={this.props.actions.fetchCreateTicketAsync}
					  fetchTicketDetails={this.props.actions.fetchTicketDetailsAsync}
					  handleShowAddToggle={this.props.actions.handleShowAddToggle}
					  handleShowDetailsToggle={this.props.actions.handleShowDetailsToggle}
					/> :
					<NotAuthorized
					  showReg={this.props.showReg}
					  error={this.props.error}
					  fetchLogin={this.props.actions.fetchLoginAsync}
					  fetchRegister={this.props.actions.fetchRegisterAsync}
					  handleError={this.props.actions.handleError}
					  handleErrorClear={this.props.actions.handleErrorClear}
					  handleShowRegToggle={this.props.actions.handleShowRegToggle}
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