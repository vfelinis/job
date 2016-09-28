let actions = {
	fetchSessionAsync: function(){
		return dispatch => {
			fetch('/server/session.php', {credentials: 'include'})
			.then(response => response.json())
			.then(data => dispatch(actions.fetchLoginSync(data)))
			.catch(error => dispatch(actions.fetchLoginSync(null)))
		}
	},
	fetchLogoutSync: function(){
		return {
			type: 'FETCH_LOGOUT'
		}
	},
	fetchLogoutAsync: function(){
		return dispatch => {
			fetch('/server/logout.php', {credentials: 'include'})
			.then(response => dispatch(actions.fetchLogoutSync()))
		}
	},
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
			fetch('/server/login.php', {credentials: 'include', method: 'post', body: JSON.stringify(user)})
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
			fetch('/server/getTickets.php?user_id='+user_id, {credentials: 'include'})
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