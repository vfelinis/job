let actions = {
	fetchTicketDetailsSync: function(ticket){
		return {
			type: 'FETCH_TICKET_DETAILS',
			payload: ticket
		}
	},
	fetchTicketDetailsAsync: function(ticket_id){
		return dispatch => {
			fetch(`/server/ticketDetails.php?ticket_id=${ticket_id}`, {credentials: 'include'})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchTicketDetailsSync(data))
				dispatch(actions.handleShowDetailsToggle())
			})
   			.catch(alert)
		}
	},
	fetchCreateTicketSync: function(showAdd){
		return {
			type: 'FETCH_CREATE_TICKET',
			payload: showAdd
		}
	},
	fetchCreateTicketAsync: function(form){
		return dispatch => {
			fetch('/server/createTicket.php', {credentials: 'include', method: 'post', body: form})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchCreateTicketSync(data.showAdd))
				dispatch(actions.handleErrorClear())
			})
   			.catch(error => dispatch(actions.handleError("Неожиданная ошибка")))
		}
	},
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
	handleError: function(error){
		return {
			type: 'ERROR',
			payload: error
		}
	},
	handleErrorClear: function(){
		return {
			type: 'ERROR_CLEAR'
		}
	},
	fetchLoginSync: function(user){
		return {
			type: 'FETCH_LOGIN',
			payload: user
		}
	},
	fetchLoginAsync: function(form){
		return dispatch => {
			fetch('/server/login.php', {credentials: 'include', method: 'post', body: form})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchLoginSync(data.user))
				dispatch(actions.handleError(data.error))
			})
   			.catch(alert)
		}
	},
	fetchRegisterSync: function(showReg){
		return {
			type: 'FETCH_REGISTER',
			payload: showReg
		}
	},
	fetchRegisterAsync: function(form){
		return dispatch => {
			fetch('/server/register.php', {credentials: 'include', method: 'post', body: form})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchRegisterSync(data.showReg))
				dispatch(actions.handleError(data.error))
			})
   			.catch(alert)
		}
	},
	fetchTicketsSync: function(tickets){
		return {
			type: 'FETCH_TICKETS',
			payload: tickets
		}
	},
	fetchTicketsAsync: function(user_id){
		return dispatch => {
			fetch(`/server/getTickets.php?user_id=${user_id}`, {credentials: 'include'})
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
	},
	handleShowDetailsToggle: function(){
		return {
			type: 'SHOW_DETAILS_TOGGLE'
		}
	}

}

export default actions