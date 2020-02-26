/* eslint-disable no-sequences */
import React from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import './App.css';
import GroupChat from './layout_body/GroupChat';
import MessengerAction from './layout_body/MessengerAction';
import axios from 'axios';
import Login from './layout_body/Login'
import ListUsers from './layout_body/ListUsers'
import Cookies from 'js-cookie'

axios.defaults.baseURL = "http://muotphim.top/";
function App() {
  return (
    <div className="App mt-5" >
      <div className="messaging">
        <h1 className="text-center my-4"><img src="https://skope.id/img/skopelogo.png" width="300"/></h1>
        <div className="body-chat">
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" component={Login} />
            <Route path="/chat/:groupId" render={(props) =>
              <div>
                <GroupChat />
                <MessengerAction value={props.match.params.groupId}/>
                <ListUsers/>
              </div>
            } />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
