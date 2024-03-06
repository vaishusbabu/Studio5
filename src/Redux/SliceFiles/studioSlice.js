import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { urlEndPoints } from "../../urlEndPoints";

export const fetchStudioData = createAsyncThunk('SliceFile/fetchStudioData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.studio)
            return response.data;
        }
        catch (error) {
            console.error('Error Occured', error);
            return null;

        }

    }
);

export const studioSlice = createSlice({
    name: "studio",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setStudio: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchStudioData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStudioData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchStudioData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setStudio } = studioSlice.actions

export default studioSlice.reducer