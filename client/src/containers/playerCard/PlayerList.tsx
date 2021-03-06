import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@material-ui/icons/RemoveCircleOutlineOutlined";
import grey from "@material-ui/core/colors/grey";
import { useSelector, useDispatch } from "react-redux";
import { increaseScore, decreaseScore, selectPlayers } from "./playersSlice";
import { makeStyles, Theme } from "@material-ui/core";
import { IPlayer } from "./playersSlice";
import AddPlayer from "./AddPlayer";
const useStyles = makeStyles((theme: Theme) => ({
  player: {
    fontSize: "4em",
  },
  score: {
    fontSize: "3em",
  },
  paper: {
    backgroundColor: grey[700],
  },
}));

export default function Player() {
  const players = useSelector(selectPlayers);
  const classes = useStyles();
  const dispatch = useDispatch();

  const renderedPlayers = players.map((player) => {
    const onIncreaseScore = (player: IPlayer) =>
      dispatch(increaseScore(player));
    const onDecreaseScore = (player: IPlayer) =>
      dispatch(decreaseScore(player));
    return (
      <Grid item xs key={player.id}>
        <Paper className={classes.paper}>
          <Typography className={classes.player}>{player.name}</Typography>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <Button>
                <RemoveCircleOutlineOutlinedIcon
                  onClick={() => onDecreaseScore(player)}
                  fontSize="large"
                />
              </Button>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.score}>{player.score}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Button onClick={() => onIncreaseScore(player)}>
                <AddCircleOutlineOutlinedIcon fontSize="large" />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  });

  return (
    <Grid container spacing={3} alignItems="center">
      {renderedPlayers}
      <AddPlayer />
    </Grid>
  );
}
