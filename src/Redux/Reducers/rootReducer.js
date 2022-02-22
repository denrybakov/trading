import { combineReducers } from "redux";
import { usdRubReducer } from "./usdRubReducer";
import { usdCadReducer } from "./usdCadReducer";
import { gbrUsdReducer } from "./gbrUsdReducer";
import { archiveReducer } from "./archiveReducer";

export const rootReducer = combineReducers({
  usdRub: usdRubReducer,
  usdCad: usdCadReducer,
  gbrUsd: gbrUsdReducer,
  archive: archiveReducer
})
