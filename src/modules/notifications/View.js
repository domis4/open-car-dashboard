//@flow
import React from 'react'
import Snackbar from '../../components/snackbar'

type ViewPropTypes = {
  notifications: [],
  removeNotification: string => {},
}

const View = ({ notifications, removeNotification }: ViewPropTypes) => (
  <div>
    {notifications.map(({ uuid, text }) => (
      <Snackbar key={uuid} text={text} close={() => removeNotification(uuid)} />
    ))}
  </div>
)

export default View
