import React, { Component } from 'react'
import { getUser } from '../adapter/index'
import { connect } from 'react-redux'

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  updateTextBox = (updatee, e) => {
    this.setState({[updatee]: e.target.value})
  }

  clearTextBox = () => {
    this.setState({
      username: "",
      password: ""
    })
  }

render() {
  const { username, password } = this.state
  return (
      <div>
        username
        <input type="text" value={username} onChange={(e) => this.updateTextBox('username', e)}/>
        password
        <input type="password" value={password} onChange={(e) => this.updateTextBox('password', e)}/>
        <button onClick={() => this.props.getUser({user_name: username, password: password})}>login</button>
      </div>
    )
  }
}

export default connect(null, { getUser })(Login);
