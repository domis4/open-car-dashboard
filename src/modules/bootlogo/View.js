//@flow
import React from 'react'
import Logo from '../../assets/bootlogo/vw.svg'
import SVGInline from 'react-svg-inline'
import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'

type propTypes = {
  classes: {},
  fadeIn: boolean,
  showElement: boolean,
}

const View = ({ showElement, classes, fadeIn }: propTypes) => (
  <Fade {...{ in: fadeIn, timeout: 600, className: classes.root }}>
    <div {...{ className: classes.root }}>
      {showElement && (
        <div {...{ className: classes.inner }}>
          <SVGInline {...{ svg: Logo }} />
          <Typography component="h1" className={classes.text}>
            Welcome
          </Typography>
        </div>
      )}
    </div>
  </Fade>
)

export default View
