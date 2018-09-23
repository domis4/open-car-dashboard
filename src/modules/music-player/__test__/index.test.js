import React from 'react'
import { shallow } from 'enzyme'
import MusicPlayer from '../index'

describe('music-player module index.js', () => {
  it('expects component to match snapshot', () => {
    const wrapper = shallow(<MusicPlayer />).dive()

    expect(wrapper).toMatchSnapshot()
  })
})
