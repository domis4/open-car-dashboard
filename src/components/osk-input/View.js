import React from 'react'
import Keyboard, { KeyboardButton } from 'react-screen-keyboard'

const View = ({value, }) => (
  <div>
    <input
      onInput={this.handleInput}
      value={value}
      onFocus={this.handleFocus}
      ref={input => {
        this.input = input
      }}
    />
    <Keyboard
      inputNode={inputNode}
      rightButtons={[
        <ClickOnKeyPressWrap key="enter">
          <KeyboardButton onClick={this.handleLoginUser} value="asdf" classes="keyboard-submit-button" />
        </ClickOnKeyPressWrap>,
      ]}
    />
  </div>
)

export default View
