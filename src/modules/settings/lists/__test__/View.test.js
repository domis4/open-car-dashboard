import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('settings list module View.js', () => {
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
  it('expects component to contain a "Paper" component', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Paper')).toHaveLength(1)
  })
  it('expects component to contain a "Typography" component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(Typography)')).toHaveLength(1)
  })
  it('expects component to contain a "Table" component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(Table)')).toHaveLength(1)
  })
  it('expects component to contain a "TableBody" component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(TableBody)')).toHaveLength(1)
  })
  it('expects component to contain five "TableRow" components with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(TableRow)')).toHaveLength(5)
  })
  it('expects component to contain ten "TableCell" components with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          tabValue: 'lists',
          setTabValue: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(TableCell)')).toHaveLength(10)
  })
})
