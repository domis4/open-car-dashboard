import { compose } from 'recompose'
import { connect } from 'react-redux'
import { push } from 'connected-react-router'

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname,
  hash: router.location.hash,
})

const mapDispatchToProps = {
  callRoute: route => push(route),
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)
