import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchomeGallData = createAsyncThunk('SliceFile/fetchomeGallData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.gall);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const homegallerySlice = createSlice({
    name: 'gall',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setGallery: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchomeGallData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchomeGallData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchomeGallData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setGallery } = homegallerySlice.actions;

export default homegallerySlice.reducer;


