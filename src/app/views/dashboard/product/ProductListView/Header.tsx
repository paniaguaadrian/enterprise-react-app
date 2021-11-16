import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {},
  action: {
    marginBottom: theme.spacing(1),
    '& + &': {
      marginLeft: theme.spacing(1),
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <h1>Header - List View - Works!</h1>
    </div>
  );
};

export default Header;
