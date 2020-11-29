import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Theme,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { grey } from "@material-ui/core/colors";
import { selectPlayers, addPlayer } from "./playersSlice";

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
  icon: {
    fontSize: "5em",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function AddPlayer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [addPlayerState, setAddPlayerState] = useState(false);
  const [chosenPlayer, setChosenPlayer] = useState("");

  const players = useSelector(selectPlayers);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setChosenPlayer(event.target.value as string);
  };

  const handleAddPlayer = (player: string) => {
    dispatch(addPlayer(chosenPlayer));
    setAddPlayerState(false);
    setChosenPlayer("");
  };

  const emptyPlayer = (
    <Grid item xs>
      <Button onClick={() => setAddPlayerState(true)}>
        <AddCircleOutlineOutlinedIcon className={classes.icon} />
      </Button>
    </Grid>
  );

  const formAddPlayer = (
    <Grid item xs key="addPlayer" alignItems="center">
      <Paper className={classes.paper}>
        <Typography className={classes.player}>Test</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel id="players-availibility-label">Players</InputLabel>
          <Select
            labelId="players-availibility-label"
            id="players-availibility"
            value={chosenPlayer}
            onChange={handleChange}
          >
            {players.map((player) => (
              <MenuItem value={player.id}>{player.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button onClick={() => handleAddPlayer(chosenPlayer)}>
          Dodaj gracza
        </Button>
      </Paper>
    </Grid>
  );
  return addPlayerState ? formAddPlayer : emptyPlayer;
}
