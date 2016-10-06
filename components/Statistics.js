import React from 'react'

class Statistics extends React.Component{
	componentDidMount(){
		this.props.fetchStatistics()
	}
	render(){
		return (
			<div>
				<h1>Статистика</h1>
				<table className="table table-striped">
					<thead>
						<tr>
							<th></th>
							<th>Дата (GMT+0)</th>
							<th>Количество новых тикетов</th>
						</tr>
					</thead>
					<tbody>
					{
						this.props.countTickets.map((element, key) => {
							return (
								<tr className={element.countStatistics > 10 ? 'more10' : ''} key={key}>
									<td>{key+1}</td>
									<td>{element.date}</td>
									<td>{element.countStatistics}</td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
				<div>Среднее время ответа сотрудника поддержки (по дням): {this.props.avgDaysPublic}</div>
				<div>Среднее время до первого ответа сотрудника клиенту (по дням): {this.props.avgDaysFirst}</div>
				<button onClick={this.props.handleShowStatisticsToggle} className="btn btn-primary">Назад</button>
			</div>
		)
	}
}

export default Statistics