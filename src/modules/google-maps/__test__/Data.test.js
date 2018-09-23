import React from 'react'
import { compose } from 'recompose'
import { shallow } from 'enzyme'
import Data from '../Data'

describe('google-maps module Data.js', () => {
  it('expects component to match snapshot', () => {
    const Dummy = () => <div />
    const Component = compose(Data)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper).toMatchSnapshot()
  })

  it('expects component to receive a `setTabValue` function as prop', () => {
    const Dummy = () => <div />
    const Component = compose(Data)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper.props().setTabValue).toBeDefined()
  })
  it('expects component to receive a `tabValue` function as prop', () => {
    const Dummy = () => <div />
    const Component = compose(Data)(Dummy)
    const wrapper = shallow(<Component />)

    expect(wrapper.props().tabValue).toBeDefined()
    expect(wrapper.props().tabValue).toEqual('lists')
  })
})
