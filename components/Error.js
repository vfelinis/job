import React from 'react'

class Error extends React.Component{
	render(){
		return (
			<div className='alert alert-danger fade in'>{this.props.error}</div>
		)
	}
}

export default Error