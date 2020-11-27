import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectPlayers } from "./playersSlice";

export default function PlayersStats() {
  const players = useSelector(selectPlayers);
  const score = players.find((p) => p.name === "Zdzichu");

  return (
    <>
      <Paper>
        <Typography>{score ? score.score : "Err"}</Typography>
      </Paper>
    </>
  );
}
