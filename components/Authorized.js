import React from 'react'
import TicketList from './TicketList'
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
					  user= {this.props.user}
					  handleShowAddToggle={this.props.handleShowAddToggle}
					/> :
					<TicketList
					  user= {this.props.user}
					  tickets={this.props.tickets}
					  fetchTickets={this.props.fetchTickets}
					  handleShowAddToggle={this.props.handleShowAddToggle}
					/>
				}
			</div>
		)
	}
}
export default Authorized