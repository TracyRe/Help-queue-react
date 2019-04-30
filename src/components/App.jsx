import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      selectedTicket: null
    };

    this.handleChangingSelectedticket = this.handleChangingSelectedticket.bind(this);
  }


  handleChangingSelectedticket(ticketId) {
    this.setState({selectedTicket: ticketId});
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(()=>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  updateTicketElapsedWaitTime() {
    // var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
    // Object.keys(newMasterTicketList).forEach(ticketId => {
    //   newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTicketList: newMasterTicketList});
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path = '/' render = {()=><TicketList ticketList = {this.state.masterTicketList} />} />
          <Route path = '/newticket' render = {()=><NewTicketControl />} />
          <Route path = '/admin'  render = {(props)=><Admin ticketList = {this.props.masterTicketList} currentRouterPath = {props.location.pathname}
            onTicketSelection = {this.handleChangingSelectedticket}
            selectedTicket = {this.state.selectedTicket} />}/>
          <Route component = {Error404}/>
        </Switch>
      </div>
    );
  }
}

App.PropTypes = {
  masterTicketList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}

export default withRouter(connect(mapStateToProps) (App));
