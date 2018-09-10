import { withStateHandlers } from 'recompose'

handleFocus = () => {
  if (this.props.onFocus) {
    this.props.onFocus(this.input)
    this.setState({ inputNode: this.input })
    // the `this.refs.input` value should be passed to the Keyboard component as inputNode prop
  }
}

export default withStateHandlers(() => ({}), {
  handleFocus: () => () => ({ inputNode: this.input }),
})
