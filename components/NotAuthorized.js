import React from 'react'
import ReactDom from 'react-dom'
import Login from './Login'
import Register from './Register'

class NotAuthorized extends React.Component{
	render(){
		return (
			<div>
				{
					this.props.showReg ?
					<Register
						error={this.props.error.register}
						fetchRegister={this.props.fetchRegister}
						errorRegister={this.props.errorRegister}
						handleShowRegToggle={this.props.handleShowRegToggle}
						errorClear={this.props.errorClear}
					/> :
					<Login
						error={this.props.error.login}
						fetchLogin={this.props.fetchLogin}
						handleShowRegToggle={this.props.handleShowRegToggle}
						errorClear={this.props.errorClear}
					/>
				}
			</div>
		)
	}
}

export default NotAuthorized