import React from 'react'

function Test() {
    return (
        <div>Test</div>
    )
}

export default Test
// const handleSubmit = async (e) => {
//     const body = {
//         lang: "en",
//         title: title,
//         field_activity_category_target_id: selectedActivity,

//     }
//     const updatedBody = Object.fromEntries(
//         Object.entries(body).filter(([key, value]) => value !== undefined && value !== null && value !== '')
//     );
//     console.log("updated body", updatedBody);
//     setClear(false);
//     e.preventDefault();
//     try {
//         const searchedData = await fetchData(activitiesURL, 'POST', updatedBody);
//         setActivitiesData(searchedData);

//     } catch (error) {
//         console.error("error in search", error);
//     }
// }