import React from 'react'
import CommentItem from './CommentItem'

class CommentList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			timer: setInterval(() => {
				props.fetchComments(props.ticketId)
	   		}, 5000)
		}
	}
	componentDidMount(){
		this.props.fetchComments(this.props.ticketId)
	}
	componentWillUnmount(){
		clearInterval(this.state.timer)
	}
	render(){
		return (
			<div className="commentList row">
				{
					this.props.comments.map(comment => {
						return <CommentItem key={comment.id} comment={comment}/>
					})
				}
			</div>
		)
	}
}

export default CommentList