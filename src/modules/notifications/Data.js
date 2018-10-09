import { connect } from 'react-redux'
import { removeNotification } from '../../redux/notifications'

const mapStateToProps = ({ notifications }) => ({
  notifications,
})

const mapDispatchToProps = {
  removeNotification,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
