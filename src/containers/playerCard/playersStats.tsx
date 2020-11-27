import React from "react";
import { Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectScore } from "./playersSlice";

export default function PlayersStats() {
  const players = useSelector(selectScore);
  const score = players.find((p) => p.name === "Zdzichu");

  return (
    <>
      <Paper>
        <Typography>{score ? score.score : "Err"}</Typography>
      </Paper>
    </>
  );
}
