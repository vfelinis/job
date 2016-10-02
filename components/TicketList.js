import React from 'react'
import TicketItem from './TicketItem'

class TicketList extends React.Component{
	componentDidMount(){
		this.props.fetchTickets(this.props.user.id)
	}
	render(){
		return (
			<div>
				{ this.props.tickets[0] ?
				<div>		
					{
						this.props.user.role == 1 ?
						<div>
							<h1>Ваши тикеты</h1>
							<button onClick={this.props.handleShowAddToggle} className="btn btn-lg btn-default navbar-right">Создать новый тикет</button>
						</div> :
						<h1>Тикеты</h1>
					}
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
								return 	<TicketItem
											key={ticket.id}
											ticket={ticket}
											handleShowDetailsToggle={this.props.handleShowDetailsToggle}
											fetchTicketDetails={this.props.fetchTicketDetails}
										/>
							})
						}
						</tbody>
					</table>
				</div> :
				null
				}
			</div>
		)
	}
}

export default TicketList