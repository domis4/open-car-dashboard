import React from 'react'
import Snackbar from '../../components/snackbar'

const View = ({ notifications, removeNotification }) => (
  <div>
    {notifications.map(({ uuid, text }) => (
      <Snackbar key={uuid} text={text} close={() => removeNotification(uuid)} />
    ))}
  </div>
)

export default View
