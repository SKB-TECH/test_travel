//@ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { apiService } from "@/settings/services/api.service";
import { recupereStorage } from "@/helprs";

const { api3 } = apiService;

const initialState = {
    message: "",
    statusApi3: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    api3_data: recupereStorage("api3") || [],
} as never;

const api3s = createSlice({
    name: "api3",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) =>
        //all agent of systeme
        builder
            .addCase(api3.pending, (state) => {
                state.statusApi3.isLoading = true;
                state.statusApi3.isError = false;
                state.statusApi3.isSuccess = false;
                state.message = "Veillez Patienter...";
            })
            .addCase(api3.fulfilled, (state, action) => {
                state.statusApi3.isLoading = false;
                state.statusApi3.isError = action.payload.error;
                state.statusApi3.isSuccess = true;
                state.api3_data = action.payload;
            })
            .addCase(api3.rejected, (state) => {
                state.statusApi3.isLoading = false;
                state.statusApi3.isError = true;
                state.statusApi3.isSuccess = false;
                state.message = "Une erreur est survenue !!";
            }),
});

export default api3s.reducer;
