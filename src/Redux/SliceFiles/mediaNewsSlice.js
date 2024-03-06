import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchMediaNewsData = createAsyncThunk('SliceFile/fetchMediaNewsData',
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

const mediaNewsSlice = createSlice({
    name: 'medianews',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setMediaNews: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMediaNewsData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMediaNewsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMediaNewsData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setMediaNews } = mediaNewsSlice.actions;

export default mediaNewsSlice.reducer;


