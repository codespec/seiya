import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from '../../../src/containers/Header'

describe('<Header />', () => {
  it('should render Register container', () => {
    const comp = shallow(<MuiThemeProvider><Header /></MuiThemeProvider>)
    expect(comp).toMatchSnapshot()
  })

  it('should have AppBar component', () => {
    const comp = mount(
      <BrowserRouter>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
      </BrowserRouter>
    )
    expect(comp.find('AppBar').length).toBe(1)
  })

  it('should change logged state', () => {
    const comp = mount(
      <BrowserRouter>
        <MuiThemeProvider>
          <Header />
        </MuiThemeProvider>
      </BrowserRouter>
    )
    const header = comp.find('Header')
    const logged = header.node.state.logged
    header.node.onClickSign()
    expect(header.node.state.logged).toBe(!logged)
  })
})
