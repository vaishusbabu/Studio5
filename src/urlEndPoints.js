import i18n from "./i18n";

// let baseURL = "https://www.studio5.qa/drupal-app";
let baseURL = "https://studio5drupaldev.applab.qa";
const currentLanguage = i18n.language;
if (currentLanguage === 'ar') {
    baseURL += "/ar";
}

export const urlEndPoints = {
    banner: `${baseURL}/api/banner?_format=json`,
    studio: `${baseURL}/api/about?_format=json`,
    zone: `${baseURL}/api/zones?_format=json`,
    food: `${baseURL}/api/featured-news-article?_format=json`,
    gallery: `${baseURL}/api/featured-news-gallery?_format=json`,
    video: `${baseURL}/api/featured-news-video?_format=json`,
    about: `${baseURL}/api/about_page`,
    equipment: `${baseURL}/api/get_equipment_used?page=0`,
    address: `${baseURL}/api/contact_us_page`,
    machine: `${baseURL}/api/get_machines?page=0`,
    machineview: `${baseURL}/machine_details/701`,
    medianews: `${baseURL}/api/media-centre?_format=json`,
    filter: `${baseURL}/api/filter/en?_format=json`,
    media: id => `${baseURL}/api/media-details/${id}?_format=json`,
    events: id => `${baseURL}/api/activity-details/${id}?_format=json`,
    activity: `${baseURL}/api/activicties?_format=json`,
    videos: `${baseURL}/api/media-details/3?_format=json`,
    gall: `${baseURL}/api/media-detail-gallery/4?_format=json`,
    mediafilter: id => `${baseURL}/api/filtermedia-centre/${id}?_format=json`,
    mfilter: `${baseURL}/api/filter/en?_format=json`,
}
