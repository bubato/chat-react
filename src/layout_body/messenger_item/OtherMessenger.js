import React from 'react';

class OtherMessenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: this.props.value
    }
  }
  render() {
    let RenderMessenger = this.state.Data
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"/> </div>
        <div className="received_msg">
          <div className="received_withd_msg">
            <p>{RenderMessenger.content}</p>
            <span className="time_date"> {RenderMessenger.reg_date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default OtherMessenger;