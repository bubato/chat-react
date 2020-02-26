import React from 'react'
import axios from 'axios';
import User from './users_item/User'

class ListUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listUsers: []
    };
  }
  componentDidMount(){
    axios.get("get-account" )
    .then(res => {
      console.log(res)
      this.setState({
        listUsers: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    let ListUsers = [];
    (this.state.listUsers).forEach(function (Item) {
        ListUsers.push(
          <User value={Item}/>
        )
    });
    return (
      <div className="list_users">
        <div className="headind_srch">
          <div className="recent_heading">
            <h4>Friends</h4>
          </div>
        </div>
        <div className="inbox_chat">
          {ListUsers}
        </div>
      </div>
    );
  }
}

export default ListUsers;