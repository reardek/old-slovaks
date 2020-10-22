import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

interface LinkTabProps {
  label?: string;
  href?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function QuestionsTab() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom color="textPrimary">
              Wielcy pisarze niemieccy
            </Typography>
            <Button variant="contained">xs</Button>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom color="textPrimary">
              Wielcy pisarze niemieccy
            </Typography>
            <Button variant="contained">xs</Button>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
            <Typography variant="h4" gutterBottom color="textPrimary">
              Wielcy pisarze niemieccy
            </Typography>
            <Button variant="contained">xs</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
