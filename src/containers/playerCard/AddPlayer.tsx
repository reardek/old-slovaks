import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import {
  Box,
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
    alignItems: "center",
    justifyItems: "center",
  },
  icon: {
    fontSize: "5em",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
    verticalAlign: "buttom",
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

  const handleAddPlayer = () => {
    dispatch(addPlayer(chosenPlayer));
    setAddPlayerState(false);
    setChosenPlayer("");
  };

  const emptyPlayer = (
    <Grid item xs key="emptyPlayer">
      <Button onClick={() => setAddPlayerState(true)}>
        <AddCircleOutlineOutlinedIcon className={classes.icon} />
      </Button>
    </Grid>
  );

  const formAddPlayer = (
    <Grid item xs key="addPlayer">
      <Paper className={classes.paper}>
        <Typography className={classes.player}>Test</Typography>
        <Box alignItems="center" justifyContent="center" display="flex">
          <FormControl className={classes.formControl}>
            <InputLabel id="players-availibility-select-outlined-label">
              Players
            </InputLabel>
            <Select
              labelId="players-availibility-select-outlined-label"
              id="players-availibility-select-outlined-label"
              value={chosenPlayer}
              onChange={handleChange}
              label="Players"
            >
              {players.map((player) => (
                <MenuItem key={player.id} value={player.id}>
                  {player.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={() => handleAddPlayer()} variant="contained">
            {players.map((player) => (
              <MenuItem value={player.id}>{player.name}</MenuItem>
            ))}
            <Button onClick={() => handleAddPlayer()}>Dodaj gracza</Button>
            Dodaj gracza
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
  return addPlayerState ? formAddPlayer : emptyPlayer;
}
