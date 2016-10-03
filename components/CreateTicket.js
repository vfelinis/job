import React from 'react'
import ReactDom from 'react-dom'
import Error from './Error'

class CreateTicket extends React.Component{
	constructor(){
		super()
		this.state = {
			theme : '',
			text: '',
			themeError: false,
			textError: false
		}
	}
	handleChangeTheme(e){
		this.setState({
			theme: e.target.value
		})
	}
	handleChangeText(e){
		this.setState({
			text: e.target.value
		})
	}
	handleCreateTicket(e){
		e.preventDefault()
		this.setState({
			theme: ReactDom.findDOMNode(this.refs.theme).value,
			text: ReactDom.findDOMNode(this.refs.text).value
		})
		if (this.state.theme && this.state.text) {
			this.setState({
				theme : '',
				text: '',
				themeError: false,
				textError: false
			})
			var form = document.querySelector('form')
			this.props.fetchCreateTicket(new FormData(form))
		}
		else{
			this.setState({
				themeError: !this.state.theme,
				textError: !this.state.text
			})
		}
	}
	render(){
		return (
			<div>
				<h1>Новый тикет</h1>
				{this.props.error ? <Error error={this.props.error} /> : null}
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
							  onChange={this.handleChangeTheme.bind(this)}
							/>
							<span className={this.state.themeError ? 'alert-danger fade in' : 'hidden'}>Поле обязательно для заполнения</span>
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
							  onChange={this.handleChangeText.bind(this)}
							></textarea>
							<span className={this.state.textError ? 'alert-danger fade in' : 'hidden'}>Поле обязательно для заполнения</span>
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
							<input type="submit" value="Создать" className="btn btn-success" />
						</div>
					</div>
				</form>
				<button onClick={this.props.handleShowAddToggle} className="btn btn-default">Отменить</button>
			</div>
		)
	}
}

export default CreateTicket