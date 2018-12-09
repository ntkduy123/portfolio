import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import { changeRoute } from '../../actions/navigation';

import Main from '../../components/layouts/Main';
 
const mapStateToProps = ({ navigation }) => navigation

const mapDispatchToProps = {
    changeRoute
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));