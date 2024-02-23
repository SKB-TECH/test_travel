//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { apiService } from "@/settings/services/api.service";
import { recupereStorage } from "@/helprs";

const { api1 } = apiService;

const initialState = {
    message: "",
    statusApi1: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    api1_data: recupereStorage("api1") || [],
} as never;

const api1s = createSlice({
    name: "api1",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>
        //all agent of systeme
        builder
            .addCase(api1.pending, (state) => {
                state.statusApi1.isLoading = true;
                state.statusApi1.isError = false;
                state.statusApi1.isSuccess = false;
                state.message = "Veillez Patienter...";
            })
            .addCase(api1.fulfilled, (state, action) => {
                state.statusApi1.isLoading = false;
                state.statusApi1.isError = action.payload.error;
                state.statusApi1.isSuccess = true;
                state.api1_data = action.payload;
            })
            .addCase(api1.rejected, (state) => {
                state.statusApi1.isLoading = false;
                state.statusApi1.isError = true;
                state.statusApi1.isSuccess = false;
                state.message = "Une erreur est survenue !!";
            }),
});

export default api1s.reducer;
