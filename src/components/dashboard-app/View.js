//@flow
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import placeholder from '../../assets/placeholder/placeholder-app-icon.png'
import Zoom from '@material-ui/core/Zoom'

type propTypes = {
  classes: {},
  image?: any,
  title?: string,
  callback?: () => {},
}

const View = ({ classes, image, title, callback = () => {} }: propTypes) => (
  <Zoom in={true}>
    <Card className={classes.card} onClick={() => callback()}>
      <CardActionArea>
        <CardMedia component="img" className={classes.media} image={image || placeholder} />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2" className={classes.text}>
            {title || 'App Title'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Zoom>
)

export default View
