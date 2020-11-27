import React from "react";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import HelpOutlineRoundedIcon from "@material-ui/icons/HelpOutlineRounded";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import PlayersStats from "./playerCard/playersStats";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    display: "block",
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
            <Grid container>
              <Grid item xs>
                <Link to="/question1" component={Button}>
                  <CheckCircleOutlineIcon style={{ color: green[500] }} />
                </Link>
              </Grid>
              <Grid item xs>
                <Button>
                  <CancelOutlinedIcon style={{ color: red[500] }} />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
              <Grid item xs>
                <Button>
                  <HelpOutlineRoundedIcon color="inherit" />
                </Button>
              </Grid>
            </Grid>
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
            <PlayersStats></PlayersStats>
            <Button variant="contained">xs</Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
