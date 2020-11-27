import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface Player {
  name: string;
  score: number;
}

const initialState: Array<Player> = [{ name: "Zdzichu", score: 0 }];

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action) {
      state.push(action.payload);
    },
    increaseScore(state) {
      const player = state.find((p) => p.name === "Zdzichu");
      if (player) player.score++;
    },
  },
});

export const selectScore = (state: RootState) => state.players;
export const { addPlayer, increaseScore } = playersSlice.actions;
export default playersSlice.reducer;
