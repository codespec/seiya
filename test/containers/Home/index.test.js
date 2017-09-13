import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from '../../../src/containers/Home'

describe('<Home />', () => {
  it('should render Home container', () => {
    const component = mount(<MuiThemeProvider><Home /></MuiThemeProvider>)
    expect(component).toMatchSnapshot()
  })

  it('should render FlatButton component', () => {
    const component = mount(<MuiThemeProvider><Home /></MuiThemeProvider>)
    expect(component.find('FlatButton').length).toBe(1)
  })

  it('should have a link to register page', () => {
    const component = mount(<MuiThemeProvider><Home /></MuiThemeProvider>)
    expect(component.find('a').prop('href')).toBe('register')
  })
})
