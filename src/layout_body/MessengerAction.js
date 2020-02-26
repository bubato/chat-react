import React from 'react';
import MyselfMessenger from './messenger_item/MyselfMessenger.js';
import OtherMessenger from './messenger_item/OtherMessenger.js';
import axios from 'axios';
import Cookies from 'js-cookie'

class MessengerAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ListMessenger: [],
        Input: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMessenger = this.getMessenger.bind(this);
    this.checkUpdate = this.checkUpdate.bind(this);
  }
  componentDidMount() {
    let idGroup = this.props.value;
    this.getMessenger(idGroup, Cookies.get('update'))
    let self = this
    let runTime = setInterval(function(){
      self.checkUpdate(idGroup)
    }, 1000)
  }
  checkUpdate(idGroup) {
    axios.get("get-update")
    .then((response) => {
        if (response.data != Cookies.get('update') || !Cookies.get('update')) {
           this.getMessenger(idGroup, response.data)
        }
    })
  }
  getMessenger(idGroup, key) {
    axios.get("get-messenger/" + idGroup)
    .then((response) => {
        this.setState({
          ListMessenger: response.data
        })
        let objDiv = document.getElementById("box-chat");
        objDiv.scrollTop = objDiv.scrollHeight;
        Cookies.set('update', key)
    })
  }
  handleChange(e) {
    this.setState({ Input: e.target.value });
  }
  handleSubmit() {
    let send = {
      "token" : Cookies.get('token'),
      "idGroup" : this.props.value,
      "content" : this.state.Input
    }
    axios.get("set-messenger/" + Cookies.get('token') + '/' + this.props.value + '/' + this.state.Input)
    .then((response) => {
        console.log(response.data);
    })
  }
  render() {
    let Messengers = [];
        this.state.ListMessenger.forEach(function (Item) {
            let ItemMessenger; 
            if (Item.id_account == Cookies.get('id')) {
              ItemMessenger = <MyselfMessenger value={Item}/>
            } else {
              ItemMessenger = <OtherMessenger value={Item}/>
            }
            Messengers.push(
              ItemMessenger
            )
        });
    return (
      <div className="mesgs">
        <div className="msg_history" id="box-chat">
          { Messengers }
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <input type="text" className="write_msg" onChange={this.handleChange} placeholder="Type a message" />
            <button onClick={this.handleSubmit} className="msg_send_btn" type="submit"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessengerAction;