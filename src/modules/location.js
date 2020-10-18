import axios from "axios";

const getCurrentPosition = async (dispatch) => {
  navigator.geolocation.getCurrentPosition(async (pos) => {
    const country = await getCountry(pos.coords.longitude, pos.coords.latitude);
    dispatch({
      type: "SET_LOCATION",
      payload: {
        country: country,
        longitude: pos.coords.longitude,
        latitude: pos.coords.latitude,
      },
    });
  });
};

const getCountry = async (long, lat) => {
  const apiKey = process.env.REACT_APP_OPEN_CAGE_API_KEY;
  const results = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}%2C${long}&language=en&key=${apiKey}`
  );
  return results.data.results[0].components.country;
};

export { getCurrentPosition };
