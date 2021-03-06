import React from 'react'
import CreateComment from './CreateComment'
import CommentList from './CommentList'

class Comments extends React.Component{
	render(){
		return (
			<div className="comments">
				<CommentList
					comments={this.props.comments}
					ticketId={this.props.ticket.id}
					fetchComments={this.props.fetchComments}
				/>
				<CreateComment
					ticket={this.props.ticket}
					fetchCreateComment={this.props.fetchCreateComment}
				/>
			</div>
		)
	}
}

export default Comments