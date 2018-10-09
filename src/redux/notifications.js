import uuid from 'uuid/v4'

const ADD_NOTIFICATION = 'ADD_NOTIFICATION'
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const addNotification = (text, type) => ({ type: 'ADD_NOTIFICATION', payload: { uuid: uuid(), text, type } })
export const removeNotification = uuid => ({ type: 'REMOVE_NOTIFICATION', payload: { uuid } })

const defaultState = []
export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_NOTIFICATION:
      return [...state, payload.notification]
    case REMOVE_NOTIFICATION:
      return [...state].filter(uuid => uuid === payload.uuid)
    default:
      return state
  }
}
