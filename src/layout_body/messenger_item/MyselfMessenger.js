import React from 'react';

class MyselfMessenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: this.props.value
    }
  }
  render() {
    let RenderMessenger = this.state.Data
    return (
      <div className="outgoing_msg">
        <div className="sent_msg">
          <p>{RenderMessenger.content}</p>
          <span className="time_date"> {RenderMessenger.reg_date}</span> 
        </div>
      </div>
    );
  }
}

export default MyselfMessenger;