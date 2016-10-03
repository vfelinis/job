import React from 'react'

class CommentItem extends React.Component{
	handleClickDetails(){
		this.props.fetchTicketDetails(this.props.ticket.id)
	}
	render(){
		return (
			<div className="commentItem row">
				<div className="col-sm-2">
					{ this.props.comment.role == 1 ?
						<img className="navbar-right" src="/dist/images/logo1.jpg" /> :
						<img className="navbar-right" src="/dist/images/logo2.jpg" />
					}
				</div>
				<div className="col-sm-8">
					<div>{this.props.comment.text}</div>
					{this.props.comment.file ? 
						<div>
							{
								function(comment){
									let fileExt = comment.file.split(".")
									let path = `/files/comments/${comment.id}.${fileExt[fileExt.length-1]}`
									return <div>{comment.file} <a href={path} target="_blank">открыть</a></div>
								}(this.props.comment)
							}
						</div> :
						null
					}
				</div>
				<div className="col-sm-2">
					{this.props.comment.date}
				</div>
			</div>
		)
	}
}

export default CommentItem