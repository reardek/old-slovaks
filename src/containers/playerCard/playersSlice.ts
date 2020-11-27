import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IPlayer {
  name: string;
  score: number;
}

const initialState: Array<IPlayer> = [
  { name: "Zdzichu", score: 0 },
  { name: "Fabianek", score: 5 },
];

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action) {
      state.push(action.payload);
    },
    increaseScore(state, action: PayloadAction<IPlayer>) {
      const player = state.find((p) => p.name === action.payload.name);
      if (player) player.score++;
    },
    decreaseScore(state, action: PayloadAction<IPlayer>) {
      const player = state.find((p) => p.name === action.payload.name);
      if (player) player.score--;
    },
  },
});

export const selectPlayers = (state: RootState) => state.players;
export const { addPlayer, increaseScore, decreaseScore } = playersSlice.actions;
export default playersSlice.reducer;
