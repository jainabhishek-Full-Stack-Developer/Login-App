import './index.css'

const Login = props => {
  const {login} = props
  return (
    <button type="button" onClick={login} className="loginBtn">
      Login
    </button>
  )
}
export default Login
