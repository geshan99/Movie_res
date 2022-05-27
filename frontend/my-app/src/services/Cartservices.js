import axios from "axios";

const APIEndpoint = "http://localhost:8004" + "/cart";

const getCarts = () => {
	console.log("dfdf");
	return axios({
		method: "get",
		url: APIEndpoint + "/Carts",
	});
};

const deleteCart = (id) => {
	console.log("del");
	return axios({
		method: "delete",
		url: APIEndpoint + `/CartDelete/${id}`,
	});
};

export default {
	getCarts,
	deleteCart,
};
