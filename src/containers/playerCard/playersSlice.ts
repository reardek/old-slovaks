import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface IPlayer {
  id: number;
  name: string;
  score: number;
}

const initialState: Array<IPlayer> = [
  { id: 1, name: "Zdzichu", score: 0 },
  { id: 2, name: "Fabianek", score: 5 },
];

const playersSlice = createSlice({
  name: "players",
  initialState,
  reducers: {
    addPlayer(state, action) {
      state.push(action.payload);
    },
    increaseScore(state, action: PayloadAction<IPlayer>) {
      const player = state.find((p) => p.id === action.payload.id);
      if (player) player.score++;
    },
    decreaseScore(state, action: PayloadAction<IPlayer>) {
      const player = state.find((p) => p.id === action.payload.id);
      if (player) player.score--;
    },
  },
});

export const selectPlayers = (state: RootState) => state.players;
export const { addPlayer, increaseScore, decreaseScore } = playersSlice.actions;
export default playersSlice.reducer;
