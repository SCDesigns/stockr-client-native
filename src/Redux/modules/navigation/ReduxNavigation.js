import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'

const mapStateToProps = (state) => ({
  nav: state.nav
});

function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <AppNavigation navigation={navigation} />
}

export default connect(mapStateToProps)(ReduxNavigation)
