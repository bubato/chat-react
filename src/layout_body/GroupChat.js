import React from 'react';
import ChatRoom from './group_item/ChatRoom.js';

class GroupChat extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            Group: [
              {
                GroupName: '2 Girls 1 Cup',
                Avatar: 'https://ptetutorials.com/images/user-profile.png',
                ChatDate: 'Dec 25',
                LastChat: 'Do you want watch 2 girls drink a solid type on a cup ?'
              },
              {
                GroupName: '2 Girls 1 Cup',
                Avatar: 'https://ptetutorials.com/images/user-profile.png',
                ChatDate: 'Dec 25',
                LastChat: 'Do you want watch 2 girls drink a solid type on a cup ?'
              },
              {
                GroupName: '2 Girls 1 Cup',
                Avatar: 'https://ptetutorials.com/images/user-profile.png',
                ChatDate: 'Dec 25',
                LastChat: 'Do you want watch 2 girls drink a solid type on a cup ?'
              },
              {
                GroupName: '2 Girls 1 Cup',
                Avatar: 'https://ptetutorials.com/images/user-profile.png',
                ChatDate: 'Dec 25',
                LastChat: 'Do you want watch 2 girls drink a solid type on a cup ?'
              },
            ]
        }
    }
    render(){
        let ListGroup = [];
        this.state.Group.forEach(function (Item) {
            ListGroup.push(
              <ChatRoom value={Item}/>
            )
        });
        return(
        <div className="inbox_people">
          <div className="headind_srch">
            <div className="recent_heading">
              <h4>Recent</h4>
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