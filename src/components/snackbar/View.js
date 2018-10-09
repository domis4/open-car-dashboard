//@flow
import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

type ViewPropTypes = {
  text: string,
  close: () => {},
}

const View = ({ text, close }: ViewPropTypes) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={true}
    onClose={close}
    message={<span>{text}</span>}
  />
)

export default View
