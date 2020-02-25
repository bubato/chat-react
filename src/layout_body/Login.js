import React from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };
    this.handleLogin=this.handleLogin.bind(this)
    this.onChangePass=this.onChangePass.bind(this)
    this.onChangeUser=this.onChangeUser.bind(this)
  }
  onChangeUser(e) {
    this.setState({
      userName : e.target.value
    })
  }
  onChangePass(e) {
    this.setState({
      password : e.target.value
    })
  }
  handleLogin(e) {
    e.preventDefault()
    // let formData = {
    //   username: this.state.userName,
    //   password: this.state.password
    // }
    axios.post("http://muotphim.top/login/" +this.state.userName + "/" +this.state.password
     )
      .then((res) => {
        console.log(res.data.token)
        Cookies.set('token', res.data.token)

      })
      .catch((err) => {
        console.log(err)
      })
  }
  render() {
    return (
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="user_card">
            <div className="d-flex justify-content-center">
              <div className="my-4">
              </div>
            </div>
            <div className="d-flex justify-content-center form_container">
              <form>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                  </div>
                  <input type="text" name="" className="form-control input_user" onChange={this.onChangeUser} value={this.state.userName} placeholder="username" />
                </div>
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                  </div>
                  <input type="password" name="" className="form-control input_pass" onChange={this.onChangePass} value={this.state.password} placeholder="password" />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                    <label className="custom-control-label" for="customControlInline">Remember me</label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button onClick={this.handleLogin} type="button" name="button" className="btn login_btn">Login</button>
                </div>
              </form>
            </div>

            <div className="mt-4">
              <div className="d-flex justify-content-center links">
                Don't have an account? <a href="#" className="ml-2">Sign Up</a>
              </div>
              <div className="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;