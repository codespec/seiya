import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from '../../../src/containers/Home'

describe('<Home />', () => {
  it('should render Home container', () => {
    const component = mount(<MuiThemeProvider><Home /></MuiThemeProvider>)
    expect(component).toMatchSnapshot()
  })
})
