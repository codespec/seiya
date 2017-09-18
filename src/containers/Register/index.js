import React, { Component } from 'react'

import { Row, Column } from '@codespec/react-toolset'

import { white, lightBlue400, lightBlue600, red600 } from 'material-ui/styles/colors'
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
      <Row>
        <Column small={12} medium={8} large={6} offset={{ medium: 2, large: 3}}>
          <form onSubmit={this.handleFormSubmit}>
            <TextField
              type='text'
              id='name'
              name='name'
              floatingLabelText='Restaurant Name'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              errorStyle={{ textAlign: 'left', color: red600 }}
              onChange={this.onChange} />
            <TextField
              type='email'
              id='email'
              name='email'
              floatingLabelText='Email'
              hintText='restaurant@name.com'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              errorStyle={{ textAlign: 'left', color: red600 }}
              onChange={this.onChange} />
            <TextField
              type='text'
              id='phone'
              name='phone'
              floatingLabelText='Phone'
              hintText='123-456-7890'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              errorStyle={{ textAlign: 'left', color: red600 }}
              onChange={this.onChange} />
            <TextField
              type='text'
              id='address-1'
              name='address-1'
              floatingLabelText='Address 1'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              errorStyle={{ textAlign: 'left', color: red600 }}
              onChange={this.onChange} />
            <TextField
              type='text'
              id='address-2'
              name='address-2'
              floatingLabelText='Address 2'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              errorStyle={{ textAlign: 'left', color: red600 }}
              onChange={this.onChange} />
            <TextField
              type='text'
              id='city'
              name='city'
              floatingLabelText='City'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              errorStyle={{ textAlign: 'left', color: red600 }}
              onChange={this.onChange} />
            <SelectField
              id='state'
              name='state'
              floatingLabelText='State'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
              value={state}
              onChange={(e, key, val) => this.onSelectChange(e, key, val)}>
              {this.renderStates()}
            </SelectField>
            <TextField
              type='text'
              id='zipcode'
              name='zipcode'
              floatingLabelText='Zip Code'
              fullWidth={true}
              floatingLabelFocusStyle={{ color: lightBlue400 }}
              underlineFocusStyle={{ borderColor: lightBlue400 }}
              underlineStyle={{ height: 0 }}
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
        </Column>
      </Row>
    )
  }
}

export default Register
