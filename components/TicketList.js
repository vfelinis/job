import React from 'react'
import TicketItem from './TicketItem'

class TodoList extends React.Component{
	componentDidMount(){
		this.props.fetch()
	}
	render(){
		return (
			<div>
				<ul>
					{
						this.props.tickets.map((ticket) => {
							return 	<TicketItem key={ticket.id} ticket={ticket}/>
						})
					}
				</ul>
			</div>
		)
	}
}

export default TodoList