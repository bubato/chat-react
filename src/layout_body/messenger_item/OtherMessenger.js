import React from 'react';
import axios from 'axios';

class OtherMessenger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: this.props.value,
      Avatar: null
    }
  }
  componentDidMount() {
    axios.get("account/" + this.props.value.id_account)
    .then((response) => {
        console.log("Response OKK")
        console.log(response.data);
        this.setState({
          Avatar: response.data.avatar
        })
    }) 
    .catch((error) => {
        console.log("Response Error")
        console.log(error);
    });
  }
  render() {
    let RenderMessenger = this.state.Data
    return (
      <div className="incoming_msg">
        <div className="incoming_msg_img"> <img src={this.state.Avatar} title={RenderMessenger.name}/> </div>
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