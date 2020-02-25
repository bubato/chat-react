import React from 'react';

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      DataGroup: this.props.value
    }
    this.ChangeGroup= this.ChangeGroup.bind(this);
    this.SubLastChat= this.SubLastChat.bind(this);
  }
  ChangeGroup() {
    window.location.href = this.state.DataGroup.id
  }
  SubLastChat (mess) {
    return mess.substring(0, 30)
  }
  render() {
    let RenderGroup = this.state.DataGroup
    return (
      <div onClick={this.ChangeGroup} className="chat_list">
        <div className="chat_people">
          <div className="chat_img"> <img src={RenderGroup.Avatar} alt="sunil" /> </div>
          <div className="chat_ib">
            <h5>{this.SubLastChat(RenderGroup.GroupName)} <span className="chat_date">{RenderGroup.ChatDate}</span></h5>
            <p>{RenderGroup.LastChat}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;