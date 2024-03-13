import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchomeVideoData = createAsyncThunk('SliceFile/fetchomeVideoData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.videos);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const homevideoSlice = createSlice({
    name: 'videos',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setVideo: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchomeVideoData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchomeVideoData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchomeVideoData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setVideo } = homevideoSlice.actions;

export default homevideoSlice.reducer;


