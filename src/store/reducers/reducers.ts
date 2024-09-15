// reducers/index.ts
import { combineReducers } from "redux";
import peopleReducer from "./people_slice.ts";

const rootReducer = combineReducers({
  people: peopleReducer,
});

export default rootReducer;
