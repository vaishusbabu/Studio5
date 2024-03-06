import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchMachineViewData = createAsyncThunk('SliceFile/fetchMachineViewData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.machineview);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const machineViewSlice = createSlice({
    name: 'machineview',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setMachineView: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMachineViewData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMachineViewData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMachineViewData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setMachineView } = machineViewSlice.actions;

export default machineViewSlice.reducer;