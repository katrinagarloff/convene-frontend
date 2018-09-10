import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  return (
    <div>
      <Link to={'./login'}>
        <div>
          Login
        </div>
      </Link>

      <Link to={'./signup'}>
        <div>
          Signup
        </div>
      </Link>
    </div>
  )
}

export default Home;
