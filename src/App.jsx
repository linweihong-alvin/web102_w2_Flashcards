import "./styles.css";
import "./customStyles.css";
import "./App.css";
import React from "react";
import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
import {
	AppBar,
	Toolbar,
	Button,
	Typography,
	Box,
	Snackbar,
	Alert,
} from "@mui/material";
// import Search from "./Search";
// import axios from "axios";
// import second from "./";
// import { AppContext } from "./GlobalProvider";
import { products } from "./products";

function App() {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	const [currentIndex, setCurrentIndex] = useState(0);

	const getRandomIndex = () => {
		const random = Math.floor(Math.random() * products.length);
		setCurrentIndex(random);
	};

	return (
		<div className="bg-container">
			{
				<>
					{/* Favicon*/}
					<link
						rel="icon"
						type="image/x-icon"
						href="assets/favicon.ico"
					/>
					{/* Bootstrap icons*/}
					<link
						href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
						rel="stylesheet"
					/>
					{/* Core theme CSS (includes Bootstrap)*/}
					{/* ✅ Do not use <link href="..."> when working with React + proxy on port 8000.
    Instead, import the CSS file directly in your component or entry file like this:
    import './styles.css'; */}
					{/* <link href="css/styles.css" rel="stylesheet" />  */}

					{/* Navigation*/}

					<nav className="navbar navbar-expand-lg navbar-light">
						{/* <nav aria-label="breadcrumb"></nav> */}
						<div className="container px-4 px-lg-1">
							{/* <a className="navbar-brand" href="/">
								Jewelry Shop
							</a> */}
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon" />
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							></div>

							<ul className="navbar-nav ">
								<li className="nav-item">
									<Button>Login</Button>
								</li>
							</ul>
							<button className="border-0 bg-transparent p-0">
								<img
									src="/assets/img/orders.jpg"
									alt="Order History"
									className="img-fluid rounded hover-shadow"
									style={{ width: "40px", height: "40px" }}
								/>
							</button>
						</div>
					</nav>

					{/* Flashcard Section */}
					<section>
						<div className="container px-4 px-lg-5 mt-5">
							<div className="d-flex flex-column align-items-center">
								<h1>English Vocabulary Flashcards</h1>
								<h5>
									This flashcard set is designed to help
									English learners expand their vocabulary by
									mastering commonly used and practical
									expressions. Each flashcard introduces a
									word or phrase with a clear, simple
									definition and often includes phrases found
									in everyday conversations, media, and exams.
								</h5>
								<h6>number of cards:3</h6>

								{products
									.filter((_, id) => id === currentIndex)
									.map((product) => (
										<div
											className="col mb-5"
											key={product.id}
										>
											<div className="card h-100">
												<div
													className={`flip-card ${
														isFlipped
															? "is-flipped"
															: ""
													}`}
													onClick={handleClick}
													style={{
														cursor: "pointer",
													}}
												>
													<div className="flip-card-inner">
														<div className="flip-card-front d-flex flex-column align-items-center text-center p-2">
															{/* Image */}
															<img
																src={
																	product.imagePath
																}
																alt={
																	product.name
																}
																className="img-fluid mb-1 fixed-img-size"
															/>

															{/* Text */}
															<h6 className="mb-0">
																{product.name}
															</h6>
														</div>
														<div
															className="flip-card-back d-flex flex-column align-items-center justify-content-center"
															style={{
																backgroundColor:
																	"gold",
																whiteSpace:
																	"normal",
																wordWrap:
																	"break-word",
																padding: "10px",
															}}
														>
															<h6 className="text-black px-2">
																{" "}
																{
																	product.description
																}
															</h6>
														</div>
													</div>
												</div>
											</div>
										</div>
									))}

								<button onClick={getRandomIndex}>
									Show Random Card
								</button>
							</div>
						</div>
					</section>
				</>
			}
		</div>
	);
}

export default App;
