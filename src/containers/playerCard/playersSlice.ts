import { createSlice } from "@reduxjs/toolkit";

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

export const { addPlayer, increaseScore } = playersSlice.actions;
export default playersSlice.reducer;
