const baseURL = "https://www.studio5.qa/drupal-app/api/";

export const urlEndPoints = {
    banner: `${baseURL}banner?_format=json`,
    studio: `${baseURL}about?_format=json`,
    zone: `${baseURL}zones?_format=json`,
    food: `${baseURL}featured-news-article?_format=json`,
    gallery: `${baseURL}featured-news-gallery?_format=json`,
    video: `${baseURL}featured-news-video?_format=json`,
    about: `${baseURL}about_page`,
    equipment: `${baseURL}get_equipment_used?page=0`,
    address: `${baseURL}contact_us_page`,
    machine: `${baseURL}get_machines?page=0`,
    machineview: `${baseURL}machine_details/701`,
    medianews: `${baseURL}media-centre?_format=json`,
    filter: `${baseURL}filter/en?_format=json`,
    media: id => `${baseURL}media-details/${id}?_format=json`,
    events: id => `${baseURL}activity-details/${id}?_format=json`,
    activity: `${baseURL}activicties?_format=json`,
}
