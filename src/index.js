import { HashRouter } from 'react-router-dom';

function liveTime() {
  const heading = React.createElement('h1', {}, 'Help Queue');
  // const clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  const ticketLocation = React.createElement('h3', {}, '3a');
  const ticketNames = React.createElement('h3', {}, 'Thato and Haley');
  const ticketIssue = React.createElement('h3', {}, 'Firebase won\'t save record');
  const app = React.createElement('div', {}, heading, ticketLocation, ticketNames,ticketIssue
  );

  ReactDOM.render(
    app,
    document.getElementById('react-app-root')
  );
}

setInterval(liveTime, 1000);
