const styles = theme => ({
  root: {
    height: '100%',
    flexGrow: 1,
  },
  app: {
    zIndex: 1,
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100%',
  },
  router: {
    width: '100%',
  },
})

export default styles
