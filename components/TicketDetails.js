import React from 'react'
import Comments from './Comments'

class TicketDetails extends React.Component{
	render(){
		return (
			<div>
				<h1>Просмотр тикета #{this.props.ticket.id}</h1>
				<div style={{"background":"#eee", "padding": "10px", "borderTop": "2px solid #555", "borderBottom": "2px solid #555"}}>
					статус: {this.props.ticket.status}, создан: {this.props.ticket.date}, тема: {this.props.ticket.theme}
				</div>
				<div className="well">
					<p>{this.props.ticket.full_text}</p>
					{
						this.props.ticket.files.map((file, key) => {
							let [fileName, fileExt] = file.split(".")
							let path = `/files/tickets/${this.props.ticket.id}/${key}.${fileExt}`
							return <div key={key}>{file} <a href={path} download>скачать</a></div>
						})
					}
				</div>
				<button onClick={this.props.handleShowDetailsToggle} className="btn btn-primary">Назад</button>
				<Comments/>
			</div>
		)
	}
}

export default TicketDetails