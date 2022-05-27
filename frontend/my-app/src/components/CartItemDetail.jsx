import Cartservices from "../services/Cartservices";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Movieservices from "../services/Movieservices";

let dollarUS = Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

function CartItemDetails({
	movie_id,
	name,
	price,
	location,
	show_time,
	seat_count,
}) {
	const [data, setData] = useState("");
	const delcart = async () => {
		try {
			const carts = await Cartservices.deleteCart(movie_id);
			console.log(carts);
			window.location.reload(false);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getMovie();
	}, []);

	const getMovie = async () => {
		try {
			const movie = await Movieservices.getMovie(
				//
				movie_id
			);
			console.log(movie.data.post.img);
			setData(movie.data.post.img);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="cart-details">
			<div className="cart-item-photo">
				<img src={data} width={100} />
			</div>
			<div className="cart-item-details">
				<h3>{name}</h3>

				<p>location :{" " + location}</p>
				<p>
					Show Time :{" " + show_time}
					{" " + "(IST)"}
				</p>
				<p>
					{"Seat Count : "}
					{seat_count}
				</p>
			</div>
			<div className="cart-item-price">
				<h3>{dollarUS.format(price)}</h3>
				<a onClick={delcart}>remove</a>
			</div>
		</div>
	);
}

export default CartItemDetails;
