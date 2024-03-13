import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchMediaFiltersData = createAsyncThunk('SliceFile/fetchMediaFiltersData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.mediafilter);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const mediafilterSlice = createSlice({
    name: 'mediafilter',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setNews: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMediaFiltersData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMediaFiltersData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMediaFiltersData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setNews } = mediafilterSlice.actions;

export default mediafilterSlice.reducer;


