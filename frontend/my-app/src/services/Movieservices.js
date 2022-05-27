import axios from "axios";

const APIEndpoint = "http://localhost:8000/movie/";

const getMovie = (id) => {
	console.log("dfdf");
	return axios({
		method: "get",
		url: APIEndpoint + "Movies/" + id,
	});
};

export default {
	getMovie,
};
