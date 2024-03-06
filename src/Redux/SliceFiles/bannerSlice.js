import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchBannerData = createAsyncThunk('SliceFile/fetchBannerData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.medianews);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const bannerSlice = createSlice({
    name: 'medianews',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setBanner: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBannerData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchBannerData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchBannerData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setBanner } = bannerSlice.actions;

export default bannerSlice.reducer;


