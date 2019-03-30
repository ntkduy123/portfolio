import { connect } from 'react-redux'

import LoginPage from '../../../components/pages/Login/LoginPage'
import { logIn } from '../../../actions/user'

const mapStateToProps = ({ user }) => user

const mapDispatchToProps = {
  logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
