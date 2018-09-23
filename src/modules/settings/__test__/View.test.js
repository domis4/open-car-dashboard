import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('settings module View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component to contain a "Zoom" component', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Zoom')).toHaveLength(1)
  })
  it('expects component to contain a List "View" component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(View)')).toHaveLength(1)
  })
})
