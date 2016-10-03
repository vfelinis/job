import React from 'react'
import ReactDom from 'react-dom'

class CreateComment extends React.Component{
	constructor(){
		super()
		this.state = {
			text: '',
			textError: false
		}
	}
	handleChangeText(e){
		this.setState({
			text: e.target.value
		})
	}
	handleCreateComment(e){
		e.preventDefault()
		this.setState({
			text: ReactDom.findDOMNode(this.refs.text).value
		})
		if (this.state.text) {
			this.setState({
				text: '',
				textError: false
			})
			var form = document.querySelector('form')
			var formData = new FormData(form)
			formData.append("ticket_id", this.props.ticket.id)
			formData.append("ticket_status", this.props.ticket.status)
			this.props.fetchCreateComment(formData, this.props.ticket.id)
			form.reset()
		}
		else{
			this.setState({
				textError: !this.state.text
			})
		}
	}
	render(){
		return (
			<div className="createComment">
			<form className="form-horizontal" encType="multipart/form-data">
				<div className="form-group">
					<label className="col-sm-offset-3 control-label">Текст комментария:*</label>
					<div className="col-sm-offset-3 col-sm-6">
						<textarea
						  ref='text'
						  name='text'
						  className="form-control"
						  rows="5"
						  onChange={this.handleChangeText.bind(this)}
						></textarea>
						 <span className={this.state.textError ? 'alert-danger fade in' : 'hidden'}>Поле обязательно для заполнения</span>
					</div>
				</div>
				<div className="form-group">
					<label className="col-sm-offset-3 control-label">Прикрепить файл:</label>
					<div className="col-sm-offset-3 col-sm-6">
						<input
						  type='file'
						  name='file'
						  className="form-control"
						/>
					</div>
				</div>
				<div className="form-group">
					<div className="col-sm-offset-3">
						<button onClick={this.handleCreateComment.bind(this)} className="btn btn-success">Добавить комментарий</button>
					</div>
				</div>
			</form>
			</div>
		)
	}
}

export default CreateComment