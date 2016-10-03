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
			<div className="main container">
				{ 'id' in this.props.user ?
					<Authorized
					  user={this.props.user}
					  tickets={this.props.tickets}
					  showAdd={this.props.showAdd}
					  error={this.props.error}
					  success={this.props.success}
					  showDetails={this.props.showDetails}
					  ticket={this.props.ticket}
					  comments={this.props.comments}
					  currentPage={this.props.currentPage}
					  pages={this.props.pages}
					  ticketsSlice={this.props.ticketsSlice}
					  fetchTickets={this.props.actions.fetchTicketsAsync}
					  fetchLogout={this.props.actions.fetchLogoutAsync}
					  fetchCreateTicket={this.props.actions.fetchCreateTicketAsync}
					  fetchTicketDetails={this.props.actions.fetchTicketDetailsAsync}
					  fetchComments={this.props.actions.fetchCommentsAsync}
					  fetchCreateComment={this.props.actions.fetchCreateCommentAsync}
					  fetchChangeStatus={this.props.actions.fetchChangeStatusAsync}
					  fetchChangeType={this.props.actions.fetchChangeTypeAsync}
					  fetchChangeZone={this.props.actions.fetchChangeZoneAsync}
					  handleShowAddToggle={this.props.actions.handleShowAddToggle}
					  handleShowDetailsToggle={this.props.actions.handleShowDetailsToggle}
					  handleClearTicketAndComments={this.props.actions.handleClearTicketAndComments}
					  handleChangeSlice={this.props.actions.handleChangeSlice}
					/> :
					<NotAuthorized
					  user={this.props.user}
					  showReg={this.props.showReg}
					  error={this.props.error}
					  success={this.props.success}
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