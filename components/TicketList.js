import React from 'react'
import TicketItem from './TicketItem'

class TicketList extends React.Component{
	componentDidMount(){
		this.props.fetchTickets(this.props.user.id)
	}
	handleClickPage(num){
		this.props.handleChangeSlice(num)
	}
	render(){
		return (
			<div>	
				{
					this.props.user.role == 1 ?
					<div>
						<h1>Ваши тикеты</h1>
						<button onClick={this.props.handleShowAddToggle} className="btn btn-lg btn-default floatRight">Создать новый тикет</button>
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
						this.props.tickets.slice(this.props.ticketsSlice-4, this.props.ticketsSlice).map((ticket) => {
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
				<div className="pagination_box">
					<ul className="pagination">
						{
							this.props.pages.map((page, i) => {
								return this.props.ticketsSlice == page ?
									<li className="active" key={i}><a onClick={this.handleClickPage.bind(this, page)}>{i+1}</a></li> :
										<li key={i}><a onClick={this.handleClickPage.bind(this, page)}>{i+1}</a></li>
							})
						}
					</ul>
				</div>
				
			</div>
		)
	}
}

export default TicketList