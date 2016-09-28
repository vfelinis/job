import React from 'react'

class CreateTicket extends React.Component{
	render(){
		return (
			<div>
				<h1>Новый тикет</h1>
				<form className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">Тип проблемы:*</label>
						<div className="col-sm-3">
							<select ref='type' className="form-control">
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
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Подробное описание:*</label>
						<div className="col-sm-10">
							<textarea
							  ref='text'
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
							  ref='link'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Прикрепить файл:</label>
						<div className="col-sm-10">
							<input
							  type='file'
							  ref='file'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-2">
							<button className="btn btn-default">
								Создать
							</button>
						</div>
					</div>
				</form>
				<button onClick={this.props.handleShowAddToggle} className="btn btn-default">Отменить</button>
			</div>
		)
	}
}

export default CreateTicket