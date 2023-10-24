import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "./session.reducer";
import { rootApi } from "@/api/root.api";

const rootReducer = combineReducers({
    [rootApi.reducerPath]: rootApi.reducer,
    session: sessionReducer
});

export default rootReducer;