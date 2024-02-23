//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { apiService } from "@/settings/services/api.service";
import { recupereStorage } from "@/helprs";

const { api2 } = apiService;

const initialState = {
    message: "",
    statusApi2: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    ap2_data: recupereStorage("api2") || [],
} as never;

const api2s = createSlice({
    name: "api2",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>
        //all agent of systeme
        builder
            .addCase(api2.pending, (state) => {
                state.statusApi2.isLoading = true;
                state.statusApi2.isError = false;
                state.statusApi2.isSuccess = false;
                state.message = "Veillez Patienter...";
            })
            .addCase(api2.fulfilled, (state, action) => {
                state.statusApi2.isLoading = false;
                state.statusApi2.isError = action.payload.error;
                state.statusApi2.isSuccess = true;
                state.api2_data = action.payload;
            })
            .addCase(api2.rejected, (state) => {
                state.statusApi2.isLoading = false;
                state.statusApi2.isError = true;
                state.statusApi2.isSuccess = false;
                state.message = "Une erreur est survenue !!";
            }),
});

export default api2s.reducer;
