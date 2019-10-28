import React, { Fragment } from 'react'

// React Material Components
import Typography from "@material-ui/core/Typography";

// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(6)
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <Fragment>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Copyright
          </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Made with love by Roman Rojas
          </Typography>
      </footer>
    </Fragment>
  )
}

export default Footer;