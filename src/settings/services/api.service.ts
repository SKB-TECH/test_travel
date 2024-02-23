//@ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { stockageData, URL_API } from "@/helprs";

const api1 = createAsyncThunk("api/service", async (_, { rejectWithValue }) => {
    try {
        const reponse = await axios.get(`${URL_API}main-banner/all`, {});
        const data = await reponse.data;
        data && stockageData("api1", data);
        return data;
    } catch (error: never) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message.toString() ||
            error.toString();
        return rejectWithValue(message);
    }
});

const api2 = createAsyncThunk(
    "api2/service",
    async (_, { rejectWithValue }) => {
        try {
            const reponse = await axios.get(`${URL_API}main-shortcut/all`);
            const data = await reponse.data;
            data && stockageData("api2", data);
            return data;
        } catch (error: never) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message.toString() ||
                error.toString();
            return rejectWithValue(message);
        }
    }
);

const api3 = createAsyncThunk(
    "api3/service",
    async (_, { rejectWithValue }) => {
        try {
            const reponse = await axios.get(
                `${URL_API}collections?prearrangedDiscount`
            );
            const data = await reponse.data;
            data && stockageData("api3", data);
            return data;
        } catch (error: never) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message.toString() ||
                error.toString();
            return rejectWithValue(message);
        }
    }
);

export const apiService = {
    api1,
    api2,
    api3,
};
