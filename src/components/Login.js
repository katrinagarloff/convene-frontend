import React, { Component } from 'react'
import { getUser } from '../adapter/index'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

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
  //

  handleLogin = () => {
    this.props.history.replace('/explore')
    this.props.getUser({user_name: this.state.username, password: this.state.password})
  }

render() {

  const { username, password } = this.state
  return (
      <div>
        username
        <input type="text" value={username} onChange={(e) => this.updateTextBox('username', e)}/>
        password
        <input type="password" value={password} onChange={(e) => this.updateTextBox('password', e)}/>
        <button onClick={this.handleLogin}>login</button>
      </div>
    )
  }
}

export default withRouter(connect(null, { getUser })(Login));
