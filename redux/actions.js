let actions = {
	fetchSessionAsync: function(){
		return dispatch => {
			fetch('/server/session.php', {credentials: 'include'})
			.then(response => response.json())
			.then(data => dispatch(actions.fetchLoginSync(data)))
			.catch(alert)
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
	errorLogin: function(data){
		return {
			type: 'FETCH_ERROR_LOGIN',
			payload: data
		}
	},
	errorRegister: function(data){
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
			.then(data => {
				dispatch(actions.fetchLoginSync(data.user))
				dispatch(actions.errorLogin(data.error))
			})
   			.catch(alert)
		}
	},
	fetchRegisterSync: function(data){
		return {
			type: 'FETCH_REGISTER',
			payload: data
		}
	},
	fetchRegisterAsync: function(user){
		return dispatch => {
			fetch('/server/register.php', {credentials: 'include', method: 'post', body: JSON.stringify(user)})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchRegisterSync(data.showReg))
				dispatch(actions.errorRegister(data.error))
			})
   			.catch(alert)
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