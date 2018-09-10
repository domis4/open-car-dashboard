const styles = theme => ({
  top: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  middle: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  bottom: {
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  drawerPaper: {
    position: 'relative',
    width: 140,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  center: {
    justifyContent: 'center',
  },
  apps: {
    border: '2px solid white',
    borderRadius: '50%',
    padding: '10px',
  },
})

export default styles
