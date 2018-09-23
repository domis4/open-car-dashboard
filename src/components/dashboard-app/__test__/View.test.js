import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('dashboard-app component View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component to render a Zoom component', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('Zoom')).toHaveLength(1)
  })
  it('expects component to render a Card component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(Card)')).toHaveLength(1)
  })
  it('expects component to render a CardActionArea component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(CardActionArea)')).toHaveLength(1)
  })
  it('expects component to render a CardMedia component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(CardMedia)')).toHaveLength(1)
  })
  it('expects component to render a CardContent component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(CardContent)')).toHaveLength(1)
  })
  it('expects component to render a Typography component with styles', () => {
    const wrapper = shallow(
      <View
        {...{
          classes: {},
          image: 'image',
          title: 'Dashboard',
          callback: jest.fn(),
        }}
      />
    ).dive()

    expect(wrapper.find('WithStyles(Typography)')).toHaveLength(1)
  })
})
