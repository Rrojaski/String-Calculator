import React, { Fragment } from 'react'

// Custom Components
import RouteLink from '../components/RouteLink/RouteLink';

// React Material Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ListIcon from "@material-ui/icons/List";


// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    fontSize: 40,
    marginRight: theme.spacing(2)
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="relative">
        <Toolbar>
          <ListIcon className={classes.icon} />
          <RouteLink to="/">
            <Typography variant="h6" color="inherit" noWrap>
              String Calculator
            </Typography>
          </RouteLink>
        </Toolbar>
      </AppBar>
    </Fragment>
  )
}

export default Header;