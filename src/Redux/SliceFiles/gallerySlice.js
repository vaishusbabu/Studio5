
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from "axios";

export const fetchGalleryData = createAsyncThunk('SliceFile/fetchGalleryData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.gallery);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);


const gallerySlice = createSlice({
    name: "gallery",
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
            .addCase(fetchGalleryData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGalleryData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchGalleryData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { setGallery } = gallerySlice.actions;
export default gallerySlice.reducer;