import React from 'react'
import ReactDom from 'react-dom'
import Error from './Error'

class Register extends React.Component{
	constructor(){
		super()
		this.state = {
			login : '',
			pass: '',
			confirmPass: '',
			loginError: false,
			passError: false,
			confirmPassError: false
		}
	}
	handleChangeLogin(e){
		this.setState({
			login: e.target.value
		})
	}
	handleChangePass(e){
		this.setState({
			pass: e.target.value
		})
	}
	handleChangeConfirmPass(e){
		this.setState({
			confirmPass: e.target.value
		})
	}
	handleRegister(e){
		e.preventDefault()
		this.setState({
			login: ReactDom.findDOMNode(this.refs.login).value,
			pass: ReactDom.findDOMNode(this.refs.pass).value,
			confirmPass: ReactDom.findDOMNode(this.refs.confirmPass).value
		})
		if (this.state.login && this.state.pass && this.state.confirmPass) {
			if(this.state.pass != this.state.confirmPass){
				this.setState({
					loginError: false,
					passError: false,
					confirmPassError: false
				})
				this.props.handleError("Пароли не совпадают")
			}
			else{
				this.setState({
					login : '',
					pass: '',
					confirmPass: ''
				})
				var form = document.querySelector('form')
				this.props.handleErrorClear()
				this.props.fetchRegister(new FormData(form))
			}
		}
		else{
			this.setState({
				loginError: !this.state.login,
				passError: !this.state.pass,
				confirmPassError: !this.state.confirmPass
			})
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
							  onChange={this.handleChangeLogin.bind(this)}
							/>
							<span className={this.state.loginError ? 'alert-danger fade in' : 'hidden'}>Поле обязательно для заполнения</span>
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
							  onChange={this.handleChangePass.bind(this)}
							/>
							<span className={this.state.passError ? 'alert-danger fade in' : 'hidden'}>Поле обязательно для заполнения</span>
						</div>
					</div>
					<div className="form-group">
						<label className="col-sm-2 control-label">Повторите пароль:</label>
						<div className="col-sm-6">
							<input
							  type='password'
							  ref='confirmPass'
							  className="form-control"
							  onChange={this.handleChangeConfirmPass.bind(this)}
							/>
							<span className={this.state.confirmPassError ? 'alert-danger fade in' : 'hidden'}>Поле обязательно для заполнения</span>
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