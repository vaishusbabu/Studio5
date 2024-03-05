import { createSlice } from "@reduxjs/toolkit";


export const bannerSlice = createSlice({
    name: "banner",
    initialState: {
        banner: ""

    },
    reducers: {
        setBanner: (state, action) => {
            state.banner = action.payload;
        },
    }
})


export const { setBanner } = bannerSlice.actions

export default bannerSlice.reducer
