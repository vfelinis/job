import React from 'react'
import Tickets from './Tickets'
import CreateTicket from './CreateTicket'

class Authorized extends React.Component{
	render(){
		return (
			<div>
				{
					this.props.user ?
					<div>Пользователь {this.props.user.login}, <a onClick={this.props.fetchLogout}>выход</a></div> :
					null
				}
				{ this.props.showAdd ?
					<CreateTicket
					  user={this.props.user}
					  error={this.props.error}
					  fetchCreateTicket={this.props.fetchCreateTicket}
					  handleShowAddToggle={this.props.handleShowAddToggle}
					/> :
					<Tickets
					  success={this.props.success}
					  user={this.props.user}
					  tickets={this.props.tickets}
					  showDetails={this.props.showDetails}
					  ticket={this.props.ticket}
					  comments={this.props.comments}
					  fetchTickets={this.props.fetchTickets}
					  fetchTicketDetails={this.props.fetchTicketDetails}fetchComments
					  fetchComments={this.props.fetchComments}
					  fetchCreateComment={this.props.fetchCreateComment}
					  fetchChangeStatus={this.props.fetchChangeStatus}
					  fetchChangeType={this.props.fetchChangeType}
					  handleShowAddToggle={this.props.handleShowAddToggle}
					  handleShowDetailsToggle={this.props.handleShowDetailsToggle}
					  handleClearTicketAndComments={this.props.handleClearTicketAndComments}
					/>
				}
			</div>
		)
	}
}
export default Authorized