import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import EventsContextProvider from "./Contexts/events-context";


ReactDOM.render(
    <EventsContextProvider>
        <App/>
    </EventsContextProvider>,
  document.getElementById('root')
);

