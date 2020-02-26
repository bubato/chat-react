import React from 'react';
import ChatRoom from './group_item/ChatRoom.js';
import axios from 'axios';
import Cookies from 'js-cookie'

class GroupChat extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            Group: []
        }
    }
    componentDidMount() {
      axios.get("get-group/" + Cookies.get('token'))
      .then((response) => {
          console.log("Response OKK")
          console.log(response.data);
          this.setState({
            Group: response.data
          })
      }) 
      .catch((error) => {
          console.log("Response Error")
          console.log(error);
      });
    }
    render(){
        let ListGroup = [];
        (this.state.Group).forEach(function (Item) {
            ListGroup.push(
              <ChatRoom value={Item}/>
            )
        });
        return(
        <div className="inbox_people">
          <div className="headind_srch pr-3">
            <button class="msg_send_btn position-static float-right " type="submit"><i class="fa fa-plus" aria-hidden="true"></i></button>
            <div className="recent_heading">
              <h4>Group</h4>
            </div>
            <div className="srch_bar">
              
            </div>
          </div>
          <div className="inbox_chat">
             { ListGroup }
          </div>
        </div>
        );
    }
}

export default GroupChat;