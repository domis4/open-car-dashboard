import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('app module View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          isBootIconVisible: false,
          setBootIconVisible: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component contain a "Provider" component', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          isBootIconVisible: false,
          setBootIconVisible: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Provider')).toHaveLength(1)
  })
  it('expects component contain a "ConnectedRouter" component which is connected', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          isBootIconVisible: false,
          setBootIconVisible: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Connect(ConnectedRouter)')).toHaveLength(1)
  })
  it('expects component contain a "Fade" component with theme', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          isBootIconVisible: false,
          setBootIconVisible: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithTheme(Fade)')).toHaveLength(1)
  })
  it('expects component contain a "Switch" component with theme', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          isBootIconVisible: false,
          setBootIconVisible: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Switch')).toHaveLength(1)
  })
  it('expects component contain at certain amount of "Route" components', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          isBootIconVisible: false,
          setBootIconVisible: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Route')).toHaveLength(3)
  })
})
