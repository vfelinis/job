import React from 'react'

class TicketItem extends React.Component{
	render(){
		return (
			<tr>
				<td>{this.props.ticket.id}</td>
				<td>{this.props.ticket.status}</td>
				<td>{this.props.ticket.type}</td>
				<td>{this.props.ticket.theme}</td>
				<td>{this.props.ticket.date}</td>
				<td>
					<button className="btn btn-xs btn-primary">
	                    Подробнее
	                </button>
				</td>
			</tr>
		)
	}
}

export default TicketItem