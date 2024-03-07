import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchEventData = createAsyncThunk('SliceFile/fetchEventData',
    async (id) => {
        try {
            const response = await axios.get(urlEndPoints.events(id));
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setEvents: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEventData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEventData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEventData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setEvents } = eventsSlice.actions;

export default eventsSlice.reducer;


