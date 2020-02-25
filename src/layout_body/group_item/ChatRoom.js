import React from 'react';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DataGroup: this.props.value
    }
  }
  render() {
    let RenderGroup = this.state.DataGroup
    return (
      <div className="chat_list">
        <div className="chat_people">
          <div className="chat_img"> <img src={RenderGroup.Avatar} alt="sunil" /> </div>
          <div className="chat_ib">
            <h5>{RenderGroup.GroupName} <span className="chat_date">{RenderGroup.ChatDate}</span></h5>
            <p>{RenderGroup.LastChat}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;