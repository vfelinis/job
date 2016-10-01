import React from 'react'
import CreateComment from './CreateComment'

class Comments extends React.Component{
	render(){
		return (
			<div>
				Комментарии:
				<CreateComment/>
			</div>
		)
	}
}

export default Comments