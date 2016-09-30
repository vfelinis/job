import React from 'react'
import ReactDom from 'react-dom'
import Error from './Error'

class CreateTicket extends React.Component{
	handleCreateTicket(e){
	e.preventDefault()
	var form = document.querySelector('form')
	this.props.fetchCreateTicket(new FormData(form))
	}
	render(){
		return (
			<div>
				<h1>Новый тикет</h1>
				<form onSubmit={this.handleCreateTicket.bind(this)} className="form-horizontal" encType="multipart/form-data">
					<div className="form-group">
						<label className="col-sm-2 control-label">Тип проблемы:*</label>
						<div className="col-sm-3">
							<select ref='type' name='type' className="form-control">
								<option value="Домены">Домены</option>
								<option value="Редактор">Редактор</option>
								<option value="Другое">Другое</option>
							</select>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Тема:*</label>
						<div className="col-sm-10">
							<input
							  type='text'
							  ref='theme'
							  name='theme'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Подробное описание:*</label>
						<div className="col-sm-10">
							<textarea
							  ref='text'
							  name='text'
							  className="form-control"
							  rows="7"
							></textarea>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Ссылка:</label>
						<div className="col-sm-10">
							<input
							  type='text'
							  name='link'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Прикрепить файл:</label>
						<div className="col-sm-10">
							<input
							  type='file'
							  name='files[]'
							  className="form-control"
							  multiple
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-2">
							<input type="submit" value="Создать" className="btn btn-default" />
						</div>
					</div>
				</form>
				<button onClick={this.props.handleShowAddToggle} className="btn btn-default">Отменить</button>
			</div>
		)
	}
}

export default CreateTicket