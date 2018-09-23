import React from 'react'
import { shallow } from 'enzyme'
import List from '../index'

describe('settings list module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<List />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
