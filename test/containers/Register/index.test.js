import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Register from '../../../src/containers/Register'

describe('<Register />', () => {
  it('should render Register container', () => {
    const component = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    expect(component).toMatchSnapshot()
  })

  it('should render InputField component', () => {
    const component = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    expect(component.find('InputField')).not.toBe(0)
  })

  it('should update formData when change input', () => {
    const component = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    const register = component.find('Register')
    component.find('#name').simulate('change', { target: { value: 'restaurant name', name: 'name' } })
    expect(register.node.state.formData.name).toBe('restaurant name')
  })

  it('should update formData when change select', () => {
    const component = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    const register = component.find('Register')
    register.node.onSelectChange(null, 1, 'CA')
    expect(register.node.state.formData.state).toBe('CA')
  })
})
