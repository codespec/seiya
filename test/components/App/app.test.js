import React from 'react'
import App from '../../../src/components/App'

describe.only('<App />', () => {
  it('should render App container', () => {
    const component = shallow(<App />)
    expect(component).toMatchSnapshot()
  })

  it('should render Row and Column component', () => {
    const component = shallow(<App />)
    expect(component.find('Row').length).toBe(1)
    expect(component.find('Column').length).toBe(1)
  })
})
