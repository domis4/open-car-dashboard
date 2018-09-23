import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Logic from '../Logic'

jest.mock('moment', () => () => ({
  format: jest.fn(() => '16:10'),
}))

describe('clock component Logic.js', () => {
  it('expects component to match snapshot', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper).toMatchSnapshot()
  })

  it('expects component to receive a `setTime` function as prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper.props().setTime).toBeDefined()
  })
  it('expects component to receive a `time` prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper.props().time).toBeDefined()
    expect(wrapper.props().time).toEqual('16:10')
  })
})
