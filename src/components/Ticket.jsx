import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'moment'

function Ticket(props) {
  return (
    <div>
      <style jsx>{`
      div {
        background-color: #f42;
      }
      `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.formattedWaitTime}</em></p>
      <p>{props.issue}</p>
      <hr/>
    </div>
  )
}


Ticket.propTypes = {
  names: PropTypes.string.isRequired,  location:PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
}
export default Ticket
