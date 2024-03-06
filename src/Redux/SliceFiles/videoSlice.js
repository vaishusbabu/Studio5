import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from "axios";

export const fetchVideoData = createAsyncThunk('SliceFile/fetchVideoData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.video);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const videoSlice = createSlice({
    name: "video",
    initialState: {
        data: null,
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
            .addCase(fetchVideoData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideoData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchVideoData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setVideo } = videoSlice.actions

export default videoSlice.reducer;