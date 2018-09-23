import React from 'react'
import { shallow } from 'enzyme'
import App from '../index'

describe('app module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<App />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
