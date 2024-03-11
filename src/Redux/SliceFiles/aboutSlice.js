import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from "axios";

export const fetchAboutData = createAsyncThunk('SliceFile/fetchAboutData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.about);
            return response.data;
        }
        catch (error) {
            console.error("Error Ocuured", error);
            return null;
        }
    }
)
const aboutSlice = createSlice({
    name: 'about',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setAbout: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAboutData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAboutData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAboutData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { setAbout } = aboutSlice.actions;

export default aboutSlice.reducer;
