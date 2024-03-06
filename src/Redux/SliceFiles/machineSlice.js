import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchMachineData = createAsyncThunk('SliceFile/fetchMachineData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.machine);
            return response.data;
        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const MachineSlice = createSlice({
    name: 'machine',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        setMachine: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMachineData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMachineData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchMachineData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setMachine } = MachineSlice.actions;

export default MachineSlice.reducer;


