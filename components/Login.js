import React from 'react'
import Error from './Error'

class Login extends React.Component{
	handleLogin(e){
		e.preventDefault()
		var form = document.querySelector('form')
		this.props.fetchLogin(new FormData(form))
	}
	followReg(){
		this.props.handleShowRegToggle()
		this.props.errorClear()
	}
	render(){
		return (
			<div>
				<h1>Авторизация</h1>
				{this.props.error ? <Error error={this.props.error} /> : null}
				<form onSubmit={this.handleLogin.bind(this)} className="form-horizontal">
					<div className="form-group">
						<label className="col-sm-2 control-label">Логин:</label>
						<div className="col-sm-6">
							<input							  
							  type='text'
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
							  name='pass'
							  className="form-control"
							/>
						</div>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-2">
							<input type='submit' value='Войти' className="btn btn-default"/>
						</div>
					</div>
				</form>
				<div className="col-sm-offset-2">
					<button onClick={this.followReg.bind(this)} className="btn btn-primary btn-lg">Зарегистрироваться</button>
				</div>
			</div>
		)
	}
}

export default Login