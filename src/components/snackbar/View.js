import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'

const View = ({ text, close }) => (
  <Snackbar
    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    open={true}
    onClose={close}
    message={<span>{text}</span>}
  />
)

export default View
