import React from 'react'
import sinon from 'sinon'
import { BrowserRouter, withRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UtilMenuWithRouter, { UtilMenu } from '../../../src/components/UtilMenu'

describe('<UtilMenu />', () => {
  const props = {
    isLogged: true,
    onClickSign: sinon.spy()
  }

  it('should render UtilMenu container', () => {
    const comp = mount(
      <MuiThemeProvider><UtilMenu /></MuiThemeProvider>
    )
    expect(comp).toMatchSnapshot()
  })

  it('should change logged state', () => {
    const comp = mount(
      <MuiThemeProvider>
        <UtilMenu {...props} />
      </MuiThemeProvider>
    )
    const utilMenu = comp.find('UtilMenu')
    expect(utilMenu.node.props.isLogged).toBe.true
    utilMenu.node.props.onClickSign()
    expect(utilMenu.node.props.isLogged).toBe.false
  })

  it('should open menu items when click on icon', () => {
    const comp = mount(
      <BrowserRouter>
        <MuiThemeProvider>
          <UtilMenuWithRouter {...props} />
        </MuiThemeProvider>
      </BrowserRouter>
    )
    const utilMenu = comp.find('UtilMenu')
    utilMenu.node.routeToPage('test')
    expect(utilMenu.node.props.history.location.pathname.includes('test')).toBe.true
  })

  it('should render nothing on register page', () => {
    const comp = mount(
      <BrowserRouter>
        <MuiThemeProvider>
          <UtilMenuWithRouter {...props} />
        </MuiThemeProvider>
      </BrowserRouter>
    )
    const utilMenu = comp.find('UtilMenu')
    utilMenu.node.routeToPage('register')
    expect(utilMenu.find('IconMenu').length).toBe(0)
  })
})
