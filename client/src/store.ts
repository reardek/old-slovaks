import { configureStore } from "@reduxjs/toolkit";

import playersReducer from "./containers/playerCard/playersSlice";

export const store = configureStore({
  reducer: {
    players: playersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
