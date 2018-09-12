import React, { Component } from 'react'
import { createUser } from '../adapter/index'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class SignUp extends Component{

  state = {
    name: "",
    username: "",
    password: "",
    confirmedPassword: "",
    errors: null
  }

  updateTextBox = (updatee, e) => {
    this.setState({[updatee]: e.target.value})
  }

  clearTextBox = () => {
    this.setState({
      name: "",
      username: "",
      password: "",
      confirmedPassword: "",
      errors: null
    })
  }
  render() {
    const { name, username, password, confirmedPassword, errors } = this.state
    return (
      <div>
      {errors ? <h3>{errors}</h3> : null}
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


          <button onClick={() => {
            if (this.state.password !== this.state.confirmedPassword) {
              this.setState({errors: "Password entries are not the same."})
            } else {
              this.props.createUser({name: name, user_name: username, password: password})
                .then(json => {
                  if (json.errors) {
                    this.setState({errors: json.errors[0]})
                  } else {
                    this.clearTextBox()
                    this.props.history.replace('/explore')
                  }
                })
            }
          }}
          >
          signup

          </button>

      </div>
    )
  }

}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default withRouter(connect(mapStateToProps, { createUser }) (SignUp))
