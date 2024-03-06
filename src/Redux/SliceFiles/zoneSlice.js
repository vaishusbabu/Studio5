import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlEndPoints } from "../../urlEndPoints";

export const fetchZoneData = createAsyncThunk('SliceFile/fetchZoneData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.zone)
            return response.data;
        }
        catch (error) {
            console.error('Error Occured', error);
            return null;

        }

    }
)
export const zoneSlice = createSlice({
    name: "zone",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setZone: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchZoneData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchZoneData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchZoneData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setZone } = zoneSlice.actions

export default zoneSlice.reducer