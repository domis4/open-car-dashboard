import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('bootlogo module View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<View {...{ classes: {}, fadeIn: true, showElement: true }} />).dive()

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component to render a "Fade" component', () => {
    const wrapper = shallow(<View {...{ classes: {}, fadeIn: true, showElement: true }} />).dive()

    expect(wrapper.find('Fade')).toHaveLength(1)
  })
  it('expects component to render a "SVGInline" component', () => {
    const wrapper = shallow(<View {...{ classes: {}, fadeIn: true, showElement: true }} />).dive()

    expect(wrapper.find('SVGInline')).toHaveLength(1)
  })
  it('expects component to render a "Typography" component with styles', () => {
    const wrapper = shallow(<View {...{ classes: {}, fadeIn: true, showElement: true }} />).dive()

    expect(wrapper.find('WithStyles(Typography)')).toHaveLength(1)
  })
})
