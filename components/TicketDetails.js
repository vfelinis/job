import React from 'react'
import Comments from './Comments'

class TicketDetails extends React.Component{
	handleChangeStatus(e){
		let status = e.target.value
		this.props.fetchChangeStatus(this.props.ticket.id, status)
	}
	handleChangeType(e){
		let type = e.target.value
		this.props.fetchChangeType(this.props.ticket.id, type)
	}
	handleBack(){
		this.props.handleShowDetailsToggle()
	}
	render(){
		return (
			<div>
				{'id' in this.props.ticket ?
					<div>
						<h1>Просмотр тикета #{this.props.ticket.id}</h1>
						{ this.props.user.role == 2 ?
							<div className="row" style={{"marginBottom":"15px"}}>
								<div className="floatRight col-sm-2">
									<label className="control-label">Изменить тип:</label>
									<select onChange={this.handleChangeType.bind(this)} className="form-control" value={this.props.ticket.type}>
										<option value="Домены">Домены</option>
										<option value="Редактор">Редактор</option>
										<option value="Другое">Другое</option>
									</select>
								</div>
								<div className="floatRight col-sm-2">
									<label className="control-label">Изменить статус:</label>
									<select onChange={this.handleChangeStatus.bind(this)} className="form-control" value={this.props.ticket.status}>
										<option value="Новый">Новый</option>
										<option value="В работе">В работе</option>
										<option value="Закрыт">Закрыт</option>
									</select>
								</div>
							</div> :
							null
						}
						<div className="ticketDetails">
							статус: {this.props.ticket.status}, создан: {this.props.ticket.date}, тема: {this.props.ticket.theme}
						</div>
						<div className="well">
							<p>{this.props.ticket.full_text}</p>
							<p>{this.props.ticket.link}</p>
							{ this.props.ticket.files[0] ?
								this.props.ticket.files.map((file, key) => {
									let fileExt = file.split(".")
									let path = `/files/tickets/${this.props.ticket.id}/${key}.${fileExt[fileExt.length-1]}`
									return <div key={key}>{file} <a href={path} target="_blank">открыть</a></div>
								}) :
								null
							}
						</div>
						<button onClick={this.handleBack.bind(this)} className="btn btn-primary">Назад</button>
						<Comments
							ticket={this.props.ticket}
							user={this.props.user}
							comments={this.props.comments}
							fetchComments={this.props.fetchComments}
							fetchCreateComment={this.props.fetchCreateComment}
							handleClearTicketAndComments={this.props.handleClearTicketAndComments}
						/>
					</div> :
					null
				}
			</div>
		)
	}
}

export default TicketDetails