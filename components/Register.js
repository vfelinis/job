import React from 'react'
import ReactDom from 'react-dom'
import Error from './Error'

class Register extends React.Component{
	handleRegister(e){
		e.preventDefault()
  		var formPass = ReactDom.findDOMNode(this.refs.pass).value
  		var formPassConfirm = ReactDom.findDOMNode(this.refs.pass_confirm).value
		if(formPass != formPassConfirm){
			this.props.handleError("Пароли не совпадают")
		}
		else{
			var form = document.querySelector('form')
			this.props.handleErrorClear()
			this.props.fetchRegister(new FormData(form))
		}
	}
	handleCancel(){
		this.props.handleShowRegToggle()
		this.props.handleErrorClear()
	}
	render(){
		return (
			<div>
				<h1>Регистрация</h1>
				{this.props.error ? <Error error={this.props.error} /> : null}
				<form onSubmit={this.handleRegister.bind(this)} className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">Логин:</label>
						<div className="col-sm-6">
							<input
							  type='text'
							  ref='login'
							  name='login'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Пароль:</label>
						<div className="col-sm-6">
							<input
							  type='password'
							  ref='pass'
							  name='pass'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Повторите пароль:</label>
						<div className="col-sm-6">
							<input
							  type='password'
							  ref='pass_confirm'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-2">
							<input type='submit' value='Отправить' className="btn btn-success"/>
						</div>
					</div>
				</form>
				<button onClick={this.handleCancel.bind(this)} className="btn btn-default">Отменить</button>
			</div>
		)
	}
}

export default Register