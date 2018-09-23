import React from 'react'
import { shallow } from 'enzyme'
import MainMenu from '../index'

describe('main-menu module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<MainMenu />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
