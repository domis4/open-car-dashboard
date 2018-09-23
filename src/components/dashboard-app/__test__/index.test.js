import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../index'

describe('dashboard-app component index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Dashboard />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
