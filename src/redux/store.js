import { combineReducers, configureStore } from "@reduxjs/toolkit";
import alertsSlice from "./alertsSlice";

const rootReducer = combineReducers({
    alerts: alertsSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;