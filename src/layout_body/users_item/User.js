import React from 'react';
import Cookies from 'js-cookie'

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataUser: this.props.value
    }
    this.handleChat = this.handleChat.bind(this)

  }
  handleChat(e){

  }
  
  render() {
    let RenderUsers = this.state.dataUser
    return (
      <div onClick={this.handleChat} className="chat_list">
        <div className="chat_people">
          <div className="chat_img"> <img src={RenderUsers.avatar}  alt="sunil" /> </div>
          <div className="chat_ib">
            <h5>{RenderUsers.name}</h5>
            <p>{}</p>   
          </div>
        </div>
      </div>
    );
  }
}

export default User;