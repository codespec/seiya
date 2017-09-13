import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Column } from '@codespec/react-toolset'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Row>
            <Column small={12} medium={6} large={4} offset={{ medium: 3, large: 4 }}>
              {this.props.children}
            </Column>
          </Row>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
