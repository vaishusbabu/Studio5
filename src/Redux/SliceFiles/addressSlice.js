import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchAddressData = createAsyncThunk('SliceFile/fetchAddressData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.address);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const addressSlice = createSlice({
    name: 'address',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setAddress: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAddressData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAddressData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAddressData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;