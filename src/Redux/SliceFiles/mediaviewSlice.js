import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchMediaViewData = createAsyncThunk('SliceFile/fetchMediaViewData',
    async (id) => {
        try {
            const response = await axios.get(urlEndPoints.media(id));
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const mediaviewSlice = createSlice({
    name: 'media',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setMeidaView: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMediaViewData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMediaViewData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMediaViewData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setMeidaView } = mediaviewSlice.actions;

export default mediaviewSlice.reducer;


