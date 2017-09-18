import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Row, Column } from '@codespec/react-toolset'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './style.scss'

import Header from '../../containers/Header'
import Footer from '../Footer'

class App extends Component {
  static propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Header />
            <div className='App__content'>
              <Row>
                <Column small={12}>
                  {this.props.children}
                </Column>
              </Row>
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
