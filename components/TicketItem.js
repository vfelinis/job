import React from 'react'

class TicketItem extends React.Component{
	render(){
		return <li>{this.props.ticket.text}</li>
	}
}

export default TicketItem