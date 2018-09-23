import React from 'react'
import { shallow } from 'enzyme'
import Bootlogo from '../index'

describe('bootlogo module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Bootlogo />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
