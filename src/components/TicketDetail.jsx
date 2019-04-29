import React from 'react';
import PropTypes from 'prop-types';

function TicketDetail(props) {
  return(
    <div>
      <h2>{props.selectedTicket.names} - {props.selectedTicket.location}</h2>
      <p><em>Submitted {props.selectedTicket.formattedWaitTime} ago</em></p>
      <h3>{props.selectedTicket.issue}</h3>
    </div>
  );
}

TicketDetail.propTypes = {
  selectedTicket: PropTypes.object
};

export default TicketDetail;
