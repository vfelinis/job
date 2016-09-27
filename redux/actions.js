let actions = {
	fetchTicketsSync: function(data){
		return {
			type: 'FETCH_TICKETS',
			payload: data
		}
	},
	fetchTicketsAsync: function(){
		return dispatch => {
			fetch('/server/getTickets.php')
			.then(response => response.json())
			.then(function(data) {
				dispatch(actions.fetchTicketsSync(data))
   			})
		}
	}

}

export default actions