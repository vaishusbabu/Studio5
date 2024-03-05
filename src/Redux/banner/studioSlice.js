import { createSlice } from "@reduxjs/toolkit";

export const studioSlice = createSlice({
    name: "studio",
    initialState: {
        studio: ""
    },
    reducers: {
        setStudio: (state, action) => {
            state.studio = action.payload
        },
    }
})

export const { setStudio } = studioSlice.actions

export default studioSlice.reducer