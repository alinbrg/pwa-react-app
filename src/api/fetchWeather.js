import axios from "axios";

// const URL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = "9f1ea422bda76b724eb2444e9910c35d";

export default async function fetchWeather(query) {
	// console.log(query);
	const response = await axios
		.get(URL, {
			params: {
				q: query,
				units: "metric",
				appid: API_KEY,
			},
		})
		.catch((error) => {
			// console.log(error.toJSON());
		});

	return response ? response.data : { errorMessage: "no result" };
}
