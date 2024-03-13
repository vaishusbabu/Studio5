import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from "axios";

export const fetchmFiltertData = createAsyncThunk('SliceFile/fetchmFiltertData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.mfilter);
            return response.data;
        }
        catch (error) {
            console.error("Error Ocuured", error);
            return null;
        }
    }
)
const mfilterSlice = createSlice({
    name: 'mfilter',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchmFiltertData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchmFiltertData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchmFiltertData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { setFilter } = mfilterSlice.actions;

export default mfilterSlice.reducer;
