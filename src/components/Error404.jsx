import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Error404(props) {

  const Error404 =  {
    background: '#fff',
  }


  return (
    <div style={Error404}>
      <h3>Page {props.location.pathname} not found</h3>
      <p><Link to='/'>Back to the start</Link></p>
    </div>
  )
}

Error404.propTypes = {
  location: PropTypes.object
}

export default Error404
