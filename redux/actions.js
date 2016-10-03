let actions = {
	fetchChangeZoneSync: function(timeZone){
		return {
			type: 'CHANGE_ZONE',
			payload: timeZone
		}
	},
	fetchChangeZoneAsync: function(timeZone, userId){
		return dispatch => {
			fetch(`/server/changeZone.php?time_zone=${timeZone}`, {credentials: 'include'})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchChangeZoneSync(data.zone))
				dispatch(actions.fetchTicketsAsync(userId))
			})
   			.catch(alert)
		}
	},
	fetchChangeStatusSync: function(status){
		return {
			type: 'CHANGE_STATUS',
			payload: status
		}
	},
	fetchChangeStatusAsync: function(ticketId, status){
		return dispatch => {
			fetch(`/server/changeTicketStatus.php?ticket_id=${ticketId}&status=${status}`, {credentials: 'include'})
			.then(response => response.json())
			.then(data => dispatch(actions.fetchChangeStatusSync(data.status)))
   			.catch(alert)
		}
	},
	fetchChangeTypeSync: function(type){
		return {
			type: 'CHANGE_TYPE',
			payload: type
		}
	},
	fetchChangeTypeAsync: function(ticketId, type){
		return dispatch => {
			fetch(`/server/changeTicketType.php?ticket_id=${ticketId}&type=${type}`, {credentials: 'include'})
			.then(response => response.json())
			.then(data => dispatch(actions.fetchChangeTypeSync(data.type)))
   			.catch(alert)
		}
	},
	fetchCreateCommentAsync: function(form, ticketId){
		return dispatch => {
			fetch('/server/createComment.php', {credentials: 'include', method: 'post', body: form})
			.then(response => {
				dispatch(actions.fetchCommentsAsync(ticketId))
				dispatch(actions.fetchTicketDetailsAsync(ticketId))
			})
   			.catch(alert)
		}
	},
	fetchCommentsSync: function(comments){
		return {
			type: 'FETCH_COMMENTS',
			payload: comments
		}
	},
	fetchCommentsAsync: function(ticketId){
		return dispatch => {
			fetch(`/server/getComments.php?ticket_id=${ticketId}`, {credentials: 'include'})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchCommentsSync(data))
			})
   			.catch(alert)
		}
	},
	fetchTicketDetailsSync: function(ticket){
		return {
			type: 'FETCH_TICKET_DETAILS',
			payload: ticket
		}
	},
	fetchTicketDetailsAsync: function(ticketId){
		return dispatch => {
			fetch(`/server/ticketDetails.php?ticket_id=${ticketId}`, {credentials: 'include'})
			.then(response => response.json())
			.then(data => {
				dispatch(actions.fetchTicketDetailsSync(data))
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
				dispatch(actions.handleShowSuccess(data.id))
				dispatch(actions.fetchCreateTicketSync(data.showAdd))
				dispatch(actions.handleErrorClear())
			})
   			.catch(alert)
		}
	},
	handleShowSuccess: function(message){
		return {
			type: 'SHOW_SUCCESS',
			payload: message
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
	fetchTicketsAsync: function(userId){
		return dispatch => {
			fetch(`/server/getTickets.php?user_id=${userId}`, {credentials: 'include'})
			.then(response => response.json())
			.then(function(data) {
				dispatch(actions.fetchTicketsSync(data))
   			})
		}
	},
	handleChangeSlice: function(num){
		return {
			type: 'CHANGE_SLICE',
			payload: num
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
	},
	handleClearTicketAndComments: function(){
		return {
			type: 'CLEAR_TICKET_AND_COMMENTS'
		}
	}
}

export default actions