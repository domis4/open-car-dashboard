import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Logic from '../Logic'

describe('bootlogo module Logic.js', () => {
  it('expects component to match snapshot', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper).toMatchSnapshot()
  })

  it('expects component to receive a `setFadeIn` function as prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper.props().setFadeIn).toBeDefined()
  })
  it('expects component to receive a `setShowElement` function as prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper.props().setShowElement).toBeDefined()
  })
  it('expects component to receive a `fadeIn` prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper.props().fadeIn).toEqual(true)
  })
  it('expects component to receive a `showElement` prop', () => {
    const Dummy = () => <div />
    const Component = compose(Logic)(Dummy)
    const wrapper = shallow(<Component />).dive()

    expect(wrapper.props().showElement).toEqual(true)
  })
})
