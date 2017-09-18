import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Register from '../../../src/containers/Register'

describe('<Register />', () => {
  it('should render Register container', () => {
    const comp = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    expect(comp).toMatchSnapshot()
  })

  it('should render InputField component', () => {
    const comp = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    expect(comp.find('InputField')).not.toBe(0)
  })

  it('should update formData when change input', () => {
    const comp = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    const register = comp.find('Register')
    comp.find('#name').simulate('change', { target: { value: 'restaurant name', name: 'name' } })
    expect(register.node.state.formData.name).toBe('restaurant name')
  })

  it('should update formData when change select', () => {
    const comp = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    const register = comp.find('Register')
    register.node.onSelectChange(null, 1, 'CA')
    expect(register.node.state.formData.state).toBe('CA')
    comp.find('SelectField').simulate('change', { tarage: { value: 'NY' } })
    expect(register.node.onSelectChange.calledOnce).toBe.true
  })

  it('should console out the log for submit form event', () => {
    const comp = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    const register = comp.find('Register')
    comp.find('form').simulate('submit')
    expect(register.node.handleFormSubmit.calledOnce).toBe.true
  })

  it('should render state elements', () => {
    const comp = mount(<MuiThemeProvider><Register /></MuiThemeProvider>)
    const register = comp.find('Register')
    expect(register.node.renderStates.calledOnce).toBe.true
  })
})
