import CartItemDetails from "../components/CartItemDetail";
import "../style/checkout.css";
import React, { useState, useEffect } from "react";
import Cartservices from "../services/Cartservices";

function Cart() {
	const [data, setData] = useState([]);
	let sum = 0;
	let dollarUS = Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "LKR",
	});

	useEffect(() => {
		// const _data = [
		// 	{
		// 		_id: 1,
		// 		MovieName: "Avatar 2",
		// 		TicketPrice: "10",
		// 		TheaterLocation: "Savoy",
		// 		MovieShowTimes: "14:30",
		// 		img_url:
		// 			"https://4.bp.blogspot.com/_RRYNK-caPgI/SwV4mMtEbGI/AAAAAAAAAKY/9pxY0x8ssU4/s1600/avatar+film.jpg",
		// 		SeatNumbers: ["G1", "G2", "G3", "G4"],
		// 	},
		// 	{
		// 		_id: 2,
		// 		MovieName: "Avatar 1",
		// 		TicketPrice: "50",
		// 		TheaterLocation: "Savoy",
		// 		MovieShowTimes: "18:30",
		// 		img_url:
		// 			"https://4.bp.blogspot.com/_RRYNK-caPgI/SwV4mMtEbGI/AAAAAAAAAKY/9pxY0x8ssU4/s1600/avatar+film.jpg",
		// 		SeatNumbers: ["G1", "G2"],
		// 	},
		// ];
		getCarts();
	}, []);

	const getCarts = async () => {
		try {
			const carts = await Cartservices.getCarts();
			console.log(carts);
			setData(carts.data.data);
		} catch (err) {
			console.log(err);
		}
	};
	console.log(data);

	return (
		<div className="cart-page-bg">
			<div className="cart-container">
				<div className="cart-header">
					<h3 className="cart-heading">Shopping cart</h3>
					<a className="cart-remove-all" href="#">
						remove all
					</a>
				</div>
				{data.length > 0 ? (
					<>
						{data.map((item) => {
							sum +=
								parseFloat(item.TicketPrice) *
								parseFloat(item.SeatNumbers.length);
							return (
								<CartItemDetails
									key={item._id}
									movie_id={item._id}
									name={item.MovieName}
									price={item.TicketPrice}
									location={item.TheaterLocation}
									show_time={item.MovieShowTimes}
									seat_count={item.SeatNumbers[0]}
								/>
							);
						})}
					</>
				) : (
					<>
						<div className="empty-cart">
							<center>
								<h2>Empty Cart</h2>
							</center>
						</div>
					</>
				)}
				<hr className="cart-line"></hr>
				<div className="cart-sub-total">
					<div className="subtotal-label">
						<div>
							<h3>Sub total</h3>
						</div>
					</div>
					<div>
						<h3 className="sub-total-price">
							{dollarUS.format(sum)}
						</h3>
					</div>
				</div>
				<div className="cart-checkout-btn-container">
					<button className="cart-checkout-btn">
						<a href="/Checkout">Checkout</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cart;
