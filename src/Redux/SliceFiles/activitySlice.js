import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { urlEndPoints } from "../../urlEndPoints";
import axios from 'axios'

export const fetchActivityData = createAsyncThunk('SliceFile/fetchActivityData',
    async ({ currentPage, title, startDate, select }) => {
        try {

            const tokenResponse = await axios.get('https://studio5drupaldev.applab.qa/session/token');
            const token = tokenResponse.data;

            const data1 = {
                lang: "en",
                page: currentPage + 1,
                ...(title && { title: title }),
                ...(startDate && { field_start_and_end_time_value: startDate }),
                ...(select && { field_activity_category_target_id: select }),
            };
            const response = await axios.post("https://studio5drupaldev.applab.qa/api/activicties?_format=json",
                data1,
                {
                    headers: {
                        'X-Csrf-Token': token
                    }
                }
            );
            return response.data;

        } catch (error) {
            console.error('Error Occured', error);
            return null;
        }
    }
);

const activitySlice = createSlice({
    name: 'activity',
    initialState: {
        data: [],
        totalPages: 0,
        loading: false,
        error: null,
    },
    reducers: {
        setActivity: (state, action) => {
            state.data = action.payload;
        },
        setTotalPages: (state, action) => {
            state.totalPages = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActivityData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchActivityData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                // state.totalPages = action.payload.pager ? Math.ceil(action.payload.pager.count / 10) : 0;
                state.totalPages = action.payload && action.payload.pager ? Math.ceil(action.payload.pager.count / 10) : 0;
            })

            .addCase(fetchActivityData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export const { setActiviity } = activitySlice.actions;

export default activitySlice.reducer;