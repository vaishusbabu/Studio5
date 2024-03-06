import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchFilterData = createAsyncThunk('SliceFile/fetchFilterData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.filter);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setFilter: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFilterData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFilterData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;


