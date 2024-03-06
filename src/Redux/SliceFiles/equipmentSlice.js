import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from "axios";

export const fetchEquipmentData = createAsyncThunk('SliceFile/fetchEquipmentData',
    async () => {
        try {
            const response = await axios.get(urlEndPoints.equipment);
            return response.data;

        }
        catch (error) {
            console.error("Error Ocuured", error);
            return null;
        }
    }

)
const equipmentSlice = createSlice({
    name: 'equipment',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        setEquipment: (state, action) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEquipmentData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEquipmentData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchEquipmentData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});
export const { setEquipment } = equipmentSlice.actions;

export default equipmentSlice.reducer;
