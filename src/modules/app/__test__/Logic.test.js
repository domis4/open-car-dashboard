import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Logic from '../Logic'

describe('app module Logic.js', () => {
  it('expects component to match snapshot', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component to receive a `setBootIconVisible` function as prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper.props().setBootIconVisible).toBeDefined()
  })
  it('expects component to receive a `isBootIconVisible` prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper.props().isBootIconVisible).toBeDefined()
    expect(wrapper.props().isBootIconVisible).toEqual(true)
  })
})
