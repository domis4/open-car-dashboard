import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('dashboard module View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          history: {},
        }}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component contain five "Grid" components with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          history: {},
        }}
      />
    )

    expect(wrapper.find('WithStyles(Grid)')).toHaveLength(5)
  })
  it('expects component contain four "Paper" components with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          history: {},
        }}
      />
    )

    expect(wrapper.find('WithStyles(Paper)')).toHaveLength(4)
  })
  it('expects component contain four DasbhoardApp "View" components with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          history: {},
        }}
      />
    )

    expect(wrapper.find('WithStyles(View)')).toHaveLength(4)
  })
})
