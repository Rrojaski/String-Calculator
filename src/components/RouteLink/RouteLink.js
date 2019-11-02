import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    color: 'inherit',
    textDecoration: "inherit"
  }
});

function RouteLink(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <Link to={props.to} className={classes.root}>
        {props.children}
      </Link>
    </Fragment>
  )
}

export default RouteLink;