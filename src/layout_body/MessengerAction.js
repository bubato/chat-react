import React from 'react';
import MyselfMessenger from './messenger_item/MyselfMessenger.js';
import OtherMessenger from './messenger_item/OtherMessenger.js';

class MessengerAction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        ListMessenger: []
    }
  }
  render() {
    return (
      <div className="mesgs">
        <div className="msg_history">
          <MyselfMessenger />
          <OtherMessenger />
          <OtherMessenger />
          <OtherMessenger />
          <MyselfMessenger />
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