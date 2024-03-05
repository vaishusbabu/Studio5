export const fetchData = async () => {
    try {
        const response = await axios.get(urlEndPoints.studio);
        dispatch(setStudio(response.data));
        console.log("studio ", response.data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
};
fetchData();

