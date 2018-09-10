import React from 'react'

const Login = () => {

  return (
    <div>
      username
      <input type="text"/>
      password
      <input type="text"/>
      <button onClick={() => console.log("hello")}>login</button>
    </div>
  )
}

export default Login;
