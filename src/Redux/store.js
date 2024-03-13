import { configureStore } from "@reduxjs/toolkit"
import bannerReducer from './SliceFiles/bannerSlice';
import studioReducer from './SliceFiles/studioSlice';
import zoneReducer from './SliceFiles/zoneSlice';
import foodReducer from './SliceFiles/newsSlice';
import videoReducer from './SliceFiles/videoSlice';
import galleryReducer from './SliceFiles/gallerySlice';
import aboutReducer from "./SliceFiles/aboutSlice";
import equipmentReducer from "./SliceFiles/equipmentSlice";
import addressReducer from './SliceFiles/addressSlice';
import machineReducer from './SliceFiles/machineSlice';
import machineViewReducer from './SliceFiles/machineViewSlice'
import medianewsReducer from './SliceFiles/mediaNewsSlice';
import filterReducer from './SliceFiles/FilterSlice';
import mediaviewReducer from './SliceFiles/mediaviewSlice'
import eventsReducer from './SliceFiles/eventSlice';
import activityReducer from './SliceFiles/activitySlice';
import videosReducer from './SliceFiles/homevideoSlice';
import gallReducer from './SliceFiles/homegallerySlice'

export default configureStore({
    reducer: {
        banner: bannerReducer,
        studio: studioReducer,
        zone: zoneReducer,
        food: foodReducer,
        video: videoReducer,
        gallery: galleryReducer,
        about: aboutReducer,
        equipment: equipmentReducer,
        machine: machineReducer,
        machineview: machineViewReducer,
        address: addressReducer,
        medianews: medianewsReducer,
        filter: filterReducer,
        media: mediaviewReducer,
        events: eventsReducer,
        activity: activityReducer,
        videos: videosReducer,
        gall: gallReducer
    }
})