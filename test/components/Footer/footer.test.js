import React from 'react'
import Footer from '../../../src/components/Footer'

describe('<Footer />', () => {
  it('should render Footer container', () => {
    const component = mount(<Footer />)
    expect(component).toMatchSnapshot()
  })
})
