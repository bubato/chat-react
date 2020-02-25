/* eslint-disable no-sequences */
import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import './App.css';
import GroupChat from './layout_body/GroupChat';
import MessengerAction from './layout_body/MessengerAction';
<<<<<<< HEAD
import axios from 'axios';
=======
import Login from './layout_body/Login'
>>>>>>> Create Login Form

axios.defaults.baseURL = "http://muotphim.top/";
function App() {
  return (
    <div className="App container mt-5" >
      <div className="messaging">
        <h1 className="text-center my-4">Skope</h1>
        <div className="inbox_msg">

          {/* <Login/> */}
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/chat" render={(props) =>
              <div>
                <GroupChat />
                <MessengerAction />
              </div>
            } />
          </Switch>
          {/* <GroupChat/>
          <MessengerAction/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
