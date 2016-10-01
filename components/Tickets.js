import React from 'react'
import TicketList from './TicketList'
import TicketDetails from './TicketDetails'

class Tickets extends React.Component{
	render(){
		return (
			<div>
				{ this.props.showDetails ?
					<TicketDetails
						ticket={this.props.ticket}
						handleShowDetailsToggle={this.props.handleShowDetailsToggle}
					/> :
					<TicketList
						tickets={this.props.tickets}
						user= {this.props.user}
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

export default Tickets