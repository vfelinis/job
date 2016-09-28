let actions = {
	fetchError: function(data){
		return {
			type: 'FETCH_ERROR',
			payload: data
		}
	},
	fetchLoginSync: function(data){
		return {
			type: 'FETCH_LOGIN',
			payload: data
		}
	},
	fetchLoginAsync: function(user){
		return dispatch => {
			fetch('/server/login.php', {method: 'post', body: JSON.stringify(user)})
			.then(response => response.json())
			.then(data => dispatch(actions.fetchLoginSync(data)))
   			.catch(error => dispatch(actions.fetchError("Неверный логин или пароль")))
		}
	},
	fetchTicketsSync: function(data){
		return {
			type: 'FETCH_TICKETS',
			payload: data
		}
	},
	fetchTicketsAsync: function(user_id){
		return dispatch => {
			fetch('/server/getTickets.php?user_id='+user_id)
			.then(response => response.json())
			.then(function(data) {
				dispatch(actions.fetchTicketsSync(data))
   			})
		}
	},
	handleShowAddToggle: function(){
		return {
			type: 'SHOW_ADD_TOGGLE'
		}
	}

}

export default actions