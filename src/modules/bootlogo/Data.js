import { connect } from 'react-redux'

const mapStateToProps = ({ router }) => ({
  pathname: router.location.pathname,
  hash: router.location.hash,
})

export default connect(mapStateToProps)
