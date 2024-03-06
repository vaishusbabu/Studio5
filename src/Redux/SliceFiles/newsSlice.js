import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from "axios";

export const fetchFoodData = createAsyncThunk('SliceFile/fetchFoodData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.food);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);


const newsSlice = createSlice({
    name: "food",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setFood: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFoodData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFoodData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchFoodData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { setFood } = newsSlice.actions;


export default newsSlice.reducer;



