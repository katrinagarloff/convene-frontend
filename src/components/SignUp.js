import React, { Component } from 'react'
import { createUser } from '../adapter/index'
import { connect } from 'react-redux'

class SignUp extends Component{

  state = {
    name: "",
    username: "",
    password: "",
    confirmedPassword: ""
  }

  updateTextBox = (updatee, e) => {
    this.setState({[updatee]: e.target.value})
  }

  render() {
    const { name, username, password, confirmedPassword } = this.state
    return (
      <div>
      <h1>
      SIGNUP
      </h1>
          name
        <input type="text" value={name} onChange={(e) => this.updateTextBox('name', e)}/>
          username
        <input type="text" value={username} onChange={(e) => this.updateTextBox('username', e)}/>
          password
        <input type="text" value={password} onChange={(e) => this.updateTextBox('password', e)}/>
          confirm password
        <input type="text" value={confirmedPassword} onChange={(e) => this.updateTextBox('confirmedPassword', e)}/>

        <button onClick={() => this.props.createUser({name: name, user_name: username, password_digest: password})}>signup</button>
      </div>
    )
  }
}

export default connect(null, { createUser }) (SignUp)
