import React, { Component } from 'react'

import { white, indigo500, lightBlue400, lightBlue600, red600 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'

import states from '../../utils/states'

class Register extends Component {
  state = {
    formData: {}
  }

  renderStates() {
    return states.map((s) => {
      return (
        <MenuItem key={s.abbr} value={s.name} primaryText={s.abbr} />
      )
    })
  }

  onChange = (e, key, payload) => {
    const form = JSON.parse(JSON.stringify(this.state.formData))
    const formData = Object.assign({}, form, {
      [e.target.name]: e.target.value
    })
    this.setState({ formData })
  }

  onSelectChange = (e, key, payload) => {
    const form = JSON.parse(JSON.stringify(this.state.formData))
    const formData = Object.assign({}, form, {
      state: payload
    })
    this.setState({ formData })
  }

  handleFormSubmit = () => {
    console.log(this.state.formData)
  }

  render() {
    const { state } = this.state.formData

    return (
      <form onSubmit={this.handleFormSubmit}>
        <TextField
          type='text'
          id='name'
          name='name'
          floatingLabelText='Restaurant Name'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <TextField
          type='email'
          id='email'
          name='email'
          floatingLabelText='Email'
          hintText='restaurant@name.com'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <TextField
          type='text'
          id='phone'
          name='phone'
          floatingLabelText='Phone'
          hintText='123-456-7890'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <TextField
          type='text'
          id='address-1'
          name='address-1'
          floatingLabelText='Address 1'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <TextField
          type='text'
          id='address-2'
          name='address-2'
          floatingLabelText='Address 2'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <TextField
          type='text'
          id='city'
          name='city'
          floatingLabelText='City'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <SelectField
          id='state'
          name='state'
          floatingLabelText='State'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          value={state}
          onChange={(e, key, val) => this.onSelectChange(e, key, val)}>
          {this.renderStates()}
        </SelectField>
        <TextField
          type='text'
          id='zipcode'
          name='zipcode'
          floatingLabelText='Zip Code'
          floatingLabelFixed={true}
          fullWidth={true}
          floatingLabelStyle={{ color: indigo500 }}
          underlineFocusStyle={{ color: indigo500 }}
          errorStyle={{ textAlign: 'left', color: red600 }}
          onChange={this.onChange} />
        <FlatButton
          type='submit'
          label='Submit'
          backgroundColor={lightBlue400}
          hoverColor={lightBlue600}
          labelStyle={{ color: white, fontWeight: 300 }}
          fullWidth={true}
          style={{ margin: '12px 0' }} />
      </form>
    )
  }
}

export default Register
