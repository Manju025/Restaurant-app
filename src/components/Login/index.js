import {useState} from 'react'
import {Redirect, useHistory} from 'react-router-dom'

import Cookies from 'js-cookie'
import './index.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [showErrMsg, setShowErrMsg] = useState(false)

  const history = useHistory()

  const submitForm = async event => {
    event.preventDefault()
    const userDetails = {
      username,
      password,
    }

    const option = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch('https://apis.ccbp.in/login', option)
    const data = await response.json()

    if (response.ok) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    } else {
      setShowErrMsg(true)
      setErrMsg(data.error_msg)
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="login">
      <div className="login-container">
        <h1 className="login-header">Welcome Back</h1>
        <p className="login-head-para">
          Login to access your restaurant account
        </p>
        <form className="login-form" onSubmit={submitForm}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
          {showErrMsg && <p className="errMsg">{errMsg}</p>}
          <div className="extras">
            <p>
              <a href="/login">Forgot Password?</a>
            </p>
            <p>
              Don&apos;t have an account? <a href="/signup">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
