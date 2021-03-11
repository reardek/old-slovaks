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
import { Button, Card, IconButton, LinearProgress } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useHistory,
  LinkProps,
} from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";

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

interface Values {
  email: string;
  password: string;
}

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
                <Card className={classes.card}>
                  <Formik
                    initialValues={{
                      email: "",
                      password: "",
                    }}
                    validate={(values) => {
                      const errors: Partial<Values> = {};
                      if (!values.email) {
                        errors.email = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        setSubmitting(false);
                        alert(JSON.stringify(values, null, 2));
                      }, 500);
                    }}
                  >
                    {({ submitForm, isSubmitting }) => (
                      <Form>
                        <Field
                          component={TextField}
                          name="email"
                          type="email"
                          label="Email"
                        />
                        <br />
                        <Field
                          component={TextField}
                          type="password"
                          label="Password"
                          name="password"
                        />
                        {isSubmitting && <LinearProgress />}
                        <br />
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={submitForm}
                        >
                          Submit
                        </Button>
                      </Form>
                    )}
                  </Formik>
                </Card>
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </Router>
  );
}
