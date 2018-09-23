import React from 'react'
import { shallow } from 'enzyme'
import View from '../View'

describe('clock component View.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<View {...{ classes: {}, time: '16:10' }} />).dive()

    expect(wrapper).toMatchSnapshot()
  })
  it('expects component to render a Typography component', () => {
    const wrapper = shallow(<View {...{ classes: {}, time: '16:10' }} />).dive()

    expect(wrapper.find('Typography')).toHaveLength(1)
  })
  it('expects component to render a paragraph element containing the curren time', () => {
    const wrapper = shallow(<View {...{ classes: {}, time: '16:10' }} />).dive()
    const elem = '<p class="MuiTypography-root-01 MuiTypography-body1-010">16:10</p>'

    expect(wrapper.html()).toEqual(elem)
  })
})
