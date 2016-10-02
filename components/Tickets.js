import React from 'react'
import TicketList from './TicketList'
import TicketDetails from './TicketDetails'

class Tickets extends React.Component{
	handleChangeZone(e){
		let zone = e.target.value
		this.props.fetchChangeZone(zone, this.props.user.id)
	}
	render(){
		return (
			<div>
				{ this.props.success ? 
					<div className='alert alert-success fade in'>
						Ваша заявка принята! Ей назначен номер {this.props.success}. Мы скоро вам ответим
					</div> : 
					null}
				{ this.props.showDetails ?
					<TicketDetails
						user={this.props.user}
						ticket={this.props.ticket}
						comments={this.props.comments}
						fetchComments={this.props.fetchComments}
						fetchCreateComment={this.props.fetchCreateComment}
						fetchChangeStatus={this.props.fetchChangeStatus}
						fetchChangeType={this.props.fetchChangeType}
						handleShowDetailsToggle={this.props.handleShowDetailsToggle}
						handleClearTicketAndComments={this.props.handleClearTicketAndComments}
					/> :
					<div>
						<div>
							Выберите часовой пояс: <select onChange={this.handleChangeZone.bind(this)} ref='zone' value={this.props.user.zone}>
								{								
									[0,1,2,3,4,5,6,7,8,9,10,11,12].map(i => <option key={i} value={i}>GMT+{i}</option>)									
								}
							</select>
						</div>
						<TicketList
							tickets={this.props.tickets}
							user={this.props.user}
							fetchTickets={this.props.fetchTickets}
							fetchTicketDetails={this.props.fetchTicketDetails}
							handleShowAddToggle={this.props.handleShowAddToggle}
							handleShowDetailsToggle={this.props.handleShowDetailsToggle}
						/>
					</div>
				}
			</div>
		)
	}
}

export default Tickets