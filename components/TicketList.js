import React from 'react'
import TicketItem from './TicketItem'

class TodoList extends React.Component{
	componentDidMount(){
		this.props.fetchTickets(this.props.user.id)
	}
	render(){
		return (
			<div>
				<h1>Ваши тикеты</h1>
				<button onClick={this.props.handleShowAddToggle} className="btn btn-lg btn-default navbar-right">Создать новый тикет</button>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Номер</th>
							<th>Статус</th>
							<th>Тип проблемы</th>
							<th>Тема</th>
							<th>Дата обновления</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
					{
						this.props.tickets.map((ticket) => {
							return 	<TicketItem key={ticket.id} ticket={ticket}/>
						})
					}
					</tbody>
				</table>
			</div>
		)
	}
}

export default TodoList