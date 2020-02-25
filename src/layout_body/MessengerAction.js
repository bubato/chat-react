import React from 'react';
import MyselfMessenger from './messenger_item/MyselfMessenger.js';
import OtherMessenger from './messenger_item/OtherMessenger.js';
import axios from 'axios';
import Cookies from 'js-cookie'

class MessengerAction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ListMessenger: []
    }
  }
  componentDidMount() {
    axios.get("get-messenger/1")
    .then((response) => {
        console.log("Response OKK")
        console.log(response.data);
        this.setState({
          ListMessenger: response.data
        })
    }) 
    .catch((error) => {
        console.log("Response Error")
        console.log(error);
    });
  }
  render() {
    let Messengers = [];
        this.state.ListMessenger.forEach(function (Item) {
            let ItemMessenger; 
            console.log(Item.id)
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
        <div className="msg_history">
          { Messengers }
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <input type="text" className="write_msg" placeholder="Type a message" />
            <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
          </div>
        </div>
      </div>
    );
  }
}

export default MessengerAction;