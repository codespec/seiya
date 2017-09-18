import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { lightBlue400 } from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'

import './style.scss'

import UtilMenu from '../../components/UtilMenu'

class Header extends Component {
  state = {
    logged: false
  }

  onClickSign = () => {
    this.setState({ logged: !this.state.logged })
  }

  render () {
    return (
      <AppBar
        title={
          <Link className='Header__brand' to='/'>BaapChef</Link>
        }
        iconElementRight={
          <UtilMenu
            isLogged={this.state.logged}
            onClickSign={this.onClickSign} />
        }
        style={{
          backgroundColor: lightBlue400,
          position: 'fixed',
          top: 0
        }}
      />
    )
  }
}

export default Header
