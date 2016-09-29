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
	fetchErrorLogin: function(data){
		return {
			type: 'FETCH_ERROR_LOGIN',
			payload: data
		}
	},
	fetchErrorRegister: function(data){
		return {
			type: 'FETCH_ERROR_REGISTER',
			payload: data
		}
	},
	errorClear: function(){
		return {
			type: 'ERROR_CLEAR'
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
   			.catch(error => dispatch(actions.fetchErrorLogin("Неверный логин или пароль")))
		}
	},
	fetchRegisterSync: function(){
		return {
			type: 'FETCH_REGISTER'
		}
	},
	fetchRegisterAsync: function(user){
		return dispatch => {
			fetch('/server/register.php', {credentials: 'include', method: 'post', body: JSON.stringify(user)})
			.then(response => dispatch(actions.fetchRegisterSync()))
   			.catch(error => dispatch(actions.fetchErrorRegister("Такой логин уже занят")))
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
	},
	handleShowRegToggle: function(){
		return {
			type: 'SHOW_REG_TOGGLE'
		}
	}

}

export default actions