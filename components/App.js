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
					  fetchTickets={this.props.actions.fetchTicketsAsync}
					  fetchLogout={this.props.actions.fetchLogoutAsync}
					  fetchCreateTicket={this.props.actions.fetchCreateTicket}
					  handleShowAddToggle={this.props.actions.handleShowAddToggle}
					/> :
					<NotAuthorized
					  showReg={this.props.showReg}
					  error={this.props.error}
					  fetchLogin={this.props.actions.fetchLoginAsync}
					  fetchRegister={this.props.actions.fetchRegisterAsync}
					  errorRegister={this.props.actions.errorRegister}
					  errorClear={this.props.actions.errorClear}
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