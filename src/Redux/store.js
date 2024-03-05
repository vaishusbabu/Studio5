import { configureStore } from "@reduxjs/toolkit"
import bannerReducer from './banner/bannerSlice';
import studioReducer from './banner/studioSlice'


export default configureStore({
    reducer: {
        banner: bannerReducer,
        studio: studioReducer
    }
})