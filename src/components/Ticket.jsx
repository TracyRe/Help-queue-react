import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import c from './../constants';

function Ticket(props) {

  function handleSavingSelectedTicket(ticketId) {
    const { dispatch } =  props;
    const action = {
      type: c.SELECT_TICKET,
      ticketId: ticketId
    };
    dispatch(action);
  }

  const ticketInformation =
    <div>
      <style jsx>{`
        div {
          border: 1px solid #ccc;
          padding: .25rem .5rem;
        }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>Submitted {props.formattedWaitTime} ago</em> </p>
    </div>;
  if( props.currentRouterPath === '/admin') {
    return (
      <div onClick = {() => {handleSavingSelectedTicket(props.ticketId);}}>{ticketInformation}</div>
    );
  } else {
    return (
      <div>
        {ticketInformation}
      </div>
    );
  }

}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,  location:PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  ticketId: PropTypes.string.isRequired
};
export default connect() (Ticket);
