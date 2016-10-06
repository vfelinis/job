import React from 'react'
import TicketItem from './TicketItem'
import Statistics from './Statistics'

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
				{ this.props.showStatistics ?
					<div>
						<Statistics
							countTickets={this.props.countTickets}
							avgDaysPublic={this.props.avgDaysPublic}
							avgDaysFirst={this.props.avgDaysFirst}
							fetchStatistics={this.props.fetchStatistics}
							handleShowStatisticsToggle={this.props.handleShowStatisticsToggle}
						/>
					</div> :
					<div>
						{
							this.props.user.role == 1 ?
							<div>
								<h1>Ваши тикеты</h1>
								<button onClick={this.props.handleShowAddToggle} className="btn btn-lg btn-default floatRight">Создать новый тикет</button>
							</div> :
							<div>
								<h1>Тикеты</h1>
								<button onClick={this.props.handleShowStatisticsToggle} className="btn btn-lg btn-default floatRight">Статистика</button>
							</div>
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
										return <li className={this.props.ticketsSlice == page ? 'active' : ''} key={i}><a onClick={this.handleClickPage.bind(this, page)}>{i+1}</a></li>
									})
								}
							</ul>
						</div>
					</div>
				}			
			</div>
		)
	}
}

export default TicketList