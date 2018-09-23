import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('main-menu module View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          history: {},
        }}
      />
    ).dive()

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component to contain a "Drawer" component', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Drawer')).toHaveLength(1)
  })
  it('expects component to contain two "List" components with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(List)')).toHaveLength(2)
  })
})
