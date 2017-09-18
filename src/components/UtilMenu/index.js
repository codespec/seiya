import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

import { Icon } from '@codespec/react-toolset'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'

export class UtilMenu extends Component {
  static propTypes = {
    isLogged: PropTypes.bool,
    onClickSign: PropTypes.func
  }

  static defaultProps = {
    isLogged: false
  }

  routeToPage = (page) => {
    this.props.history.push(page)
  }

  render() {
    const { isLogged, onClickSign, location } = this.props
    const isRegister = location && location.pathname.includes('register')

    return (
      <div>
        { !isRegister
          ? <IconMenu
            iconButtonElement={
              <IconButton>
                <Icon type='materialDesign' name='MdMoreVert' size={26} color='#fff' />
              </IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
            touchTapCloseDelay={1}
          >
            { isLogged && <MenuItem
              primaryText='Sign Out'
              leftIcon={<Icon type='githubOcticons' name='GoSignOut' />}
              innerDivStyle={{ paddingLeft: 50 }}
              onClick={onClickSign} /> }
            { !isLogged && <MenuItem
              primaryText='Sign In'
              leftIcon={<Icon type='githubOcticons' name='GoSignIn' />}
              innerDivStyle={{ paddingLeft: 50 }}
              onClick={onClickSign} /> }
            { !isLogged && <MenuItem
              primaryText='Register'
              leftIcon={<Icon type='materialDesign' name='MdAddCircleOutline' />}
              innerDivStyle={{ paddingLeft: 50 }}
              onClick={() => this.routeToPage('register')} /> }
          </IconMenu>
          : null
        }
      </div>
    )
  }
}

export default withRouter(UtilMenu)
