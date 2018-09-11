import React, { Component } from 'react'
import { createUser } from '../adapter/index'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

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

  clearTextBox = () => {
    this.setState({
      name: "",
      username: "",
      password: "",
      confirmedPassword: ""
    })
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
        <input type="password" value={password} onChange={(e) => this.updateTextBox('password', e)}/>
          confirm password
        <input type="password" value={confirmedPassword} onChange={(e) => this.updateTextBox('confirmedPassword', e)}/>

        <Link to='/'>
          <button onClick={() => {
            if (this.state.password === this.state.confirmedPassword) {
              this.props.createUser({name: name, user_name: username, password: password})
              this.clearTextBox()
            } else {
              alert("password entries are not the same.")
          }}
          }>
          signup
          </button>
        </Link>
      </div>
    )
  }
}



export default connect(null, { createUser }) (SignUp)
