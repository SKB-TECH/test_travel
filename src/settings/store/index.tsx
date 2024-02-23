import { configureStore } from "@reduxjs/toolkit";
import api1sReducer from "@/settings/slices/api.slice.1";
import api2sReducer from "@/settings/slices/api.slice.2";
import api3sReducer from "@/settings/slices/api.slice.3";
export function makeStore() {
    return configureStore({
        reducer: {
            api1: api1sReducer,
            api2: api2sReducer,
            api3: api3sReducer,
        },
    });
}

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
