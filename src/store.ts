import { configureStore } from "@reduxjs/toolkit";

import playersReducer from "./containers/playerCard/playersSlice";

export default configureStore({
  reducer: {
    players: playersReducer,
  },
});
