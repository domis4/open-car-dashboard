import React from 'react'
import { shallow } from 'enzyme'
import Settings from '../index'

describe('settings module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Settings />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
