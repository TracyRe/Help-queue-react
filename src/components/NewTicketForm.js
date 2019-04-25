import React from 'react';
import  PropTypes from 'prop-types';
import Moment from 'moment';


function NewTicketForm(props){
  let _names = null
  let _location = null
  let _issue = null

  function handleNewTicketFormSubmission(event) {
    event.preventDefault()
    props.onNewTicketCreation({names: _names.value, location: _location.value, issue: _issue.value, timeOpen: new Moment()})
    _names.value = ''
    _location.value = ''
    _issue.value = ''
  }

  return (
    <div>
      <style jsx>{`
        form {
          display: flex;
          flex-flow: column nowrap;
          justify-content: flex-start;
          font-size: 1rem;
        }

        input, button, textarea {
          margin-top: .5rem;
        }

        input {
          width: 40vw;
          font-size: .85rem;
        }

        textarea {
          width: 90vw;
          height: 100px;
          font-size: .85rem;
        }

        button {
          width: 100px;
          self-align: flex-start;
          background-color: #acceff;
          border-radius: 4px;
          text-transform: uppercase;
          font-size: 1rem;
        }
      `}
      </style>
      <form onSubmit = {handleNewTicketFormSubmission}>
        <input
          type = 'text'
          id = 'names'
          placeholder = 'Pair Names'
          ref = {(input) => {_names = input}}/>
        <input
          type = 'text'
          id = 'location'
          placeholder = 'Location'
          ref = {(input) => {_location = input}}/>
        <textarea
          id = 'issue'
          placeholder = 'Describe your issue.'
          ref = {(textarea) => {_issue = textarea}}/>
        <button type = 'submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
}

export default NewTicketForm;
