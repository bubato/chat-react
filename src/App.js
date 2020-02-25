import React from 'react';
import './App.css';
import GroupChat from './layout_body/GroupChat';
import MessengerAction from './layout_body/MessengerAction';
import axios from 'axios';

axios.defaults.baseURL = "http://muotphim.top/";
function App() {
  return (
    <div className="App container mt-5" >
      <div className="messaging">
        <div className="inbox_msg">
         <GroupChat/>
         <MessengerAction/>
        </div>
      </div>
    </div>
  );
}

export default App;
