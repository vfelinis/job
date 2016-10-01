import React from 'react'

class CreateComment extends React.Component{
	render(){
		return (
			<div style={{"background":"#fafafa", "borderTop": "2px solid #aaa"}}>
			<form className="form-horizontal" encType="multipart/form-data">
				<div className="form-group">
					<label className="col-sm-offset-3 control-label">Текст комментария:*</label>
					<div className="col-sm-offset-3 col-sm-6">
						<textarea
						  ref='text'
						  name='text'
						  className="form-control"
						  rows="5">
						 </textarea>
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
						<button className="btn btn-success">Добавить комментарий</button>
					</div>
				</div>
			</form>
			</div>
		)
	}
}

export default CreateComment