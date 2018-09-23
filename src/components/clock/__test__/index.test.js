import React from 'react'
import { shallow } from 'enzyme'
import Clock from '../index'

jest.mock('moment', () => () => ({ format: () => '16:10' }))

describe('clock index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<Clock />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
