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
						error={this.props.error}
						fetchRegister={this.props.fetchRegister}
						handleError={this.props.handleError}
						handleShowRegToggle={this.props.handleShowRegToggle}
						handleErrorClear={this.props.handleErrorClear}
					/> :
					<Login
						error={this.props.error}
						success={this.props.success}
						fetchLogin={this.props.fetchLogin}
						handleShowRegToggle={this.props.handleShowRegToggle}
						handleErrorClear={this.props.handleErrorClear}
					/>
				}
			</div>
		)
	}
}

export default NotAuthorized