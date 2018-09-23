import React from 'react'
import { shallow } from 'enzyme'
import GoogleMaps from '../index'

describe('google-maps module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<GoogleMaps />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
