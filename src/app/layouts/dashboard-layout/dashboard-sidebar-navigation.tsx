import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router';

// Feather React Icons
import { PieChart as PieChartIcon } from 'react-feather';

// Material UI Components
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
  Toolbar,
  ListSubheader,
} from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

const drawerWidth = 240;
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    link: { textDecoration: 'none', color: 'inherit' },
    logoWithLink: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
    },
  }),
);

const DshboardSidebarNavigation = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();
  useEffect(() => {}, []);
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Toolbar
          style={{ width: '6rem', height: 'auto' }}
          className={classes.toolbar}
        >
          <Link to={`${url}`} className={classes.logoWithLink}>
            Logo
          </Link>
        </Toolbar>
        <div className={classes.drawerContainer}>
          <List>
            <ListSubheader>Reports</ListSubheader>
            <Link className={classes.link} to={`${url}`}>
              <ListItem button>
                <ListItemIcon>
                  <PieChartIcon />
                </ListItemIcon>
                <ListItemText primary={'Dashboard'} />
              </ListItem>
            </Link>
            <Link className={classes.link} to={`${url}/settings-and-privacy`}>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={'settings and privacy'} />
              </ListItem>
            </Link>
            <a className={classes.link} href={'/'}>
              <ListItem button>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary={'logout'} />
              </ListItem>
            </a>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default DshboardSidebarNavigation;
