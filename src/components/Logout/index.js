import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button type="button" onClick={logout} className="loginBtn">
      Logout
    </button>
  )
}
export default Logout
