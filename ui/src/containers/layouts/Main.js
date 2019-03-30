import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { changeRoute } from '../../actions/navigation'
import { logOut } from '../../actions/user'

import Main from '../../components/layouts/Main'

const mapStateToProps = ({ navigation, blog }) => ({ ...navigation, ...blog })

const mapDispatchToProps = {
  changeRoute,
  logOut
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
