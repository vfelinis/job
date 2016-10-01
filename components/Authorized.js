import React from 'react'
import Tickets from './Tickets'
import CreateTicket from './CreateTicket'

class Authorized extends React.Component{
	render(){
		return (
			<div>
				{
					this.props.user ?
					<div>Пользователь {this.props.user.login}, <a style={{cursor: 'pointer'}} onClick={this.props.fetchLogout}>выход</a></div> :
					null
				}
				{ this.props.showAdd ?
					<CreateTicket
					  user= {this.props.user}
					  error={this.props.error}
					  fetchCreateTicket={this.props.fetchCreateTicket}
					  handleShowAddToggle={this.props.handleShowAddToggle}
					/> :
					<Tickets
					  user= {this.props.user}
					  tickets={this.props.tickets}
					  showDetails={this.props.showDetails}
					  ticket={this.props.ticket}
					  fetchTickets={this.props.fetchTickets}
					  fetchTicketDetails={this.props.fetchTicketDetails}
					  handleShowAddToggle={this.props.handleShowAddToggle}
					  handleShowDetailsToggle={this.props.handleShowDetailsToggle}
					/>
				}
			</div>
		)
	}
}
export default Authorized