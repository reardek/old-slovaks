import React from "react";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  LinkProps,
} from "react-router-dom";
import { RegisterTab } from "./RegisterTab";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    contenet: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
    toolbar: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    card: {
      display: "inline-block",
      minWidth: "3em",
      alignItems: "center",
      padding: theme.spacing(2),
    },
  })
);

const LinkBehavior = React.forwardRef<any, Omit<LinkProps, "to">>(
  (props, ref) => <Link ref={ref} to="/protected" {...props} />
);

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Router>
      <div>
        <CssBaseline />

        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit" component={LinkBehavior}>
              SignUp
            </Button>
            <Button color="inherit" component={LinkBehavior}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <main className={classes.contenet}>
          <div className={classes.toolbar}>
            <Switch>
              <Route path="/protected">
                <RegisterTab />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}
