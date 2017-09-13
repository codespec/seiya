import React from 'react'
import App from '../../../src/containers/App'

describe('<App />', () => {
  it('should render App container', () => {
    const component = mount(<App />)
    expect(component).toMatchSnapshot()
  })

  it('should render Row and Column component', () => {
    const component = mount(<App />)
    expect(component.find('Row').length).toBe(1)
    expect(component.find('Column').length).toBe(1)
  })
})
