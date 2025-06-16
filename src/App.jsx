import "./styles.css";
import "./customStyles.css";
import './App.css';
import React  from "react";
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
	
	const [openSnackBar, setOpenSnackBar] = useState(false);

	// pagination -- start
	const [currentPage, setCurrentPage] = useState(1);
	

	const handleCloseSnackBar = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpenSnackBar(false);
	};

	

	return (
		<>
		 	
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
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<nav aria-label="breadcrumb"></nav>
						<div className="container px-4 px-lg-1">
							{/* <div className="d-flex justify-content-end ">
								<Link to={"/"}>
									<img
										src="/assets/img/home.png"
										alt="home"
										style={{
											width: "50px",
											height: "50px",
										}}
										className="img-fluid rounded hover-shadow"
									/>
								</Link>
							</div> */}
							<a className="navbar-brand" href="/">
								Jewelry Shop
							</a>
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
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
									<li className="nav-item">
										<a
											className="nav-link active"
											aria-current="page"
											href="/"
										>
											Home
										</a>
									</li>
									{/* <li className="nav-item">
										<Link className="nav-link" to="/about">
											About
										</Link>
									</li> */}
									<li className="nav-item">
										{/* <a
											className="nav-link"
											data-bs-toggle="offcanvas"
											data-bs-target="#offcanvasExample"
											aria-controls="offcanvasExample"
										>
											more about us
										</a> */}
									</li>
									{/* <li className="nav-item dropdown">
										<a
											className="nav-link dropdown-toggle"
											id="navbarDropdown"
											href="#"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Shop
										</a>
										<ul
											className="dropdown-menu"
											aria-labelledby="navbarDropdown"
										>
											<li>
												<a
													className="dropdown-item"
													href="#!"
												>
													All Products
												</a>
											</li>

											<li>
												<hr className="dropdown-divider" />
											</li>
											<li>
												<a
													className="dropdown-item"
													href="#!"
												>
													Popular Items
												</a>
											</li>
											<li>
												<a
													className="dropdown-item"
													href="#!"
												>
													New Arrivals
												</a>
											</li>
										</ul>
									</li> */}
									{/* <li className="nav-item">
										{userInfo &&
										userInfo.type === "admin" ? (
											<Button
												onClick={handleControlPanel}
											>
												Control Panel
											</Button>
										) : null}
									</li> */}
								</ul>
								{/* <SearchBar /> */}
							</div>
							
							<ul className="navbar-nav ">
								<li className="nav-item">
									
										<Button >
											Login
										</Button>
								
								</li>
							</ul>
							<button
								className="border-0 bg-transparent p-0"
							>
								<img
									src="/assets/img/orders.jpg"
									alt="Order History"
									className="img-fluid rounded hover-shadow"
									style={{ width: "40px", height: "40px" }}
								/>
							</button>
						</div>
					</nav>
					{/* Header*/}
					{/* <header class="bg-dark py-5">
			<div class="container px-4 px-lg-5 my-5">
				<div class="text-center text-white">
					<h1 class="display-4 fw-bolder">Shop in style</h1>
					<p class="lead fw-normal text-white-50 mb-0">
						With this shop hompeage template
					</p>
				</div>
			</div>
		</header> */}
					<header>
						<div
							id="carouselExampleDark"
							className="carousel carousel-dark slide"
						>
							<div className="carousel-indicators">
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to={0}
									className="active"
									aria-current="true"
									aria-label="Slide 1"
								/>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to={1}
									aria-label="Slide 2"
								/>
								<button
									type="button"
									data-bs-target="#carouselExampleDark"
									data-bs-slide-to={2}
									aria-label="Slide 3"
								/>
							</div>
							<div className="carousel-inner">
								<div
									className="carousel-item active"
									data-bs-interval={10000}
								>
									<img
										src="assets/img/carousel/wedding_diamond.png"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div
									className="carousel-item"
									data-bs-interval={2000}
								>
									<img
										src="assets/img/carousel/lovebird_diamond.png"
										className="d-block w-100"
										alt="..."
									/>
								</div>
								<div className="carousel-item">
									<img
										src="assets/img/carousel/peppa_pig.png"
										className="d-block w-100"
										alt="..."
									/>
								</div>
							</div>
							<button
								className="carousel-control-prev"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="prev"
							>
								<span
									className="carousel-control-prev-icon"
									aria-hidden="true"
								/>
								<span className="visually-hidden">
									Previous
								</span>
							</button>
							<button
								className="carousel-control-next"
								type="button"
								data-bs-target="#carouselExampleDark"
								data-bs-slide="next"
							>
								<span
									className="carousel-control-next-icon"
									aria-hidden="true"
								/>
								<span className="visually-hidden">Next</span>
							</button>
						</div>
					</header>
					<div
						id="but"
						className="d-flex justify-content-center mt-3"
					>
						<button
							className="btn btn-outline-warning"
							data-bs-toggle="modal"
							data-bs-target="#window"
						>
							Learn about 25% off promotion.
						</button>
					</div>
					<br />
					<br />
					<div
						id="accordionContainer"
						className="d-flex justify-content-center "
					>
						<div className="accordion w-75" id="accordionExample">
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
									>
										Why choose us?
									</button>
								</h2>
								<div
									id="collapseOne"
									className="accordion-collapse collapse"
								>
									<div className="accordion-body">
										because you should
									</div>
								</div>
							</div>
							<div className="accordion-item">
								<h2 className="accordion-header">
									<button
										className="accordion-button collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
									>
										How do we make sure our products meet
										high standards?
									</button>
								</h2>
								<div
									id="collapseTwo"
									className="accordion-collapse collapse"
								>
									<div className="accordion-body">
										don't ask
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Product Section */}
					<section className="py-5">
						<div className="container px-4 px-lg-5 mt-5">
							<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
								{/* product information */}
								{products.map((product) => (
									<div className="col mb-5" key={product.id}>
										<div className="card h-100">
											<div className="flip-card">
												<div className="flip-card-inner">
													<div className="flip-card-front">
														{/* Sale badge*/}
														{product.discountedPrice && (
															<div
																className="badge bg-dark text-white position-absolute"
																style={{
																	top: "0.5rem",
																	right: "0.5rem",
																}}
															>
																Sale
															</div>
														)}
														{/* Product image*/}
														<img
															className="card-img-top fixed-img-size"
															src={
																product.imagePath
															}
															alt={product.name}
														/>
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
															Weight:{" "}
															{product.weight}
														</h6>
														<h6 className="text-black px-2">
															Material:{" "}
															{product.material}
														</h6>
														{/* <h6 className="text-black px-2">
															Description:{" "}
															{
																product.description
															}
														</h6> */}
													</div>
												</div>
											</div>
											{/* Product details */}
											<div className="card-body p-4">
												<div className="text-center">
													{/* Product name */}
													<h5 className="fw-bolder">
														{product.name}
													</h5>
													{/* Product stars/reviews */}
													<div className="d-flex justify-content-center small text-warning mb-2">
														{[
															...Array(
																product.starsNum
															),
														].map((_, index) => (
															<div
																className="bi-star-fill"
																key={`filled-${index}`}
															/>
														))}
														{[
															...Array(
																5 -
																	product.starsNum
															),
														].map((_, index) => (
															<div
																className="bi-star"
																key={`empty-${index}`}
															/>
														))}
													</div>
													{/* Product price */}
													<span
														className={
															product.discountedPrice &&
															`text-muted text-decoration-line-through`
														}
													>
														${product.originalPrice}
													</span>
													<span className="text-success fw-bold fs-5">
														{product.discountedPrice &&
															` $${product.discountedPrice}`}
													</span>
												</div>
											</div>
											{/* Product actions*/}
											<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
												<div className="text-center">
													<button
														className="btn btn-outline-dark mt-auto"
														// onClick={() =>
														// 	addToCart(
														// 		product.id,
														// 		product.name,
														// 		product.imagePath,
														// 		product.weight,
														// 		product.material,
														// 		product.discountedPrice ||
														// 			product.originalPrice
														// 	)
														// }
													>
														Add to cart
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
								{/* pop up message: success */}
								<Snackbar
									open={openSnackBar}
									anchorOrigin={{
										vertical: "bottom",
										horizontal: "center",
									}}
									autoHideDuration={2000}
									onClose={handleCloseSnackBar}
								>
									<Alert
										severity="success"
										variant="filled"
										sx={{ width: "100%" }}
										onClose={handleCloseSnackBar}
									>
										Successfully added to the cart!
									</Alert>
								</Snackbar>
							</div>
						</div>
					</section>
					<div
						className="offcanvas offcanvas-start"
						tabIndex={-1}
						id="offcanvasExample"
						aria-labelledby="offcanvasExampleLabel"
					>
						<div className="offcanvas-header">
							<h5
								className="offcanvas-title"
								id="offcanvasExampleLabel"
							>
								Offcanvas
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="offcanvas"
								aria-label="Close"
							/>
						</div>
						<div className="offcanvas-body">
							<div>Some text</div>
							<div className="dropdown mt-3">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									data-bs-toggle="dropdown"
								>
									Dropdown button
								</button>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div
						className="progress"
						id="progressBar"
						role="progressbar"
						aria-label="Basic example"
						aria-valuenow={0}
						aria-valuemin={0}
						aria-valuemax={100}
					>
						<div
							className="progress-bar"
							id="progress-bar"
							style={{ width: "100%" }}
						/>
					</div>
					<div className="modal fade" id="window">
						<div className="modal-dialog">
							<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title">test</h5>
									<button
										className="btn-close"
										data-bs-dismiss="modal"
									/>
								</div>
								<div className="modal-body">test content</div>
							</div>
						</div>
					</div>
					{/* Footer - pagination */}
					<div className="container d-flex justify-content-center">
						<nav>
							<ul className="pagination">
								<li
									className={`page-item ${
										currentPage === 1 && "disabled"
									}`}
								>
									<button
										className="page-link"
										onClick={() =>
											setCurrentPage((prev) =>
												Math.max(prev - 1, 1)
											)
										}
									>
										Previous
									</button>
								</li>

								{/* {Array.from({ length: totalPages }, (_, i) => (
									<li
										key={i}
										className={`page-item ${
											currentPage === i + 1 && "active"
										}`}
									>
										<button
											className="page-link"
											onClick={() =>
												setCurrentPage(i + 1)
											}
										>
											{i + 1}
										</button>
									</li>
								))} */}

								{/* <li
									className={`page-item ${
										currentPage === totalPages && "disabled"
									}`}
								>
									<button
										className="page-link"
										onClick={() =>
											setCurrentPage((prev) =>
												Math.min(prev + 1, totalPages)
											)
										}
									>
										Next
									</button>
								</li> */}
							</ul>
						</nav>
					</div>
					<footer className="py-5 bg-dark">
						<div className="container">
							<p className="m-0 text-center text-white">
								Copyright © Jewelry shop 2025
							</p>
						</div>
					</footer>
					{/* Bootstrap core JS*/}
					{/* Core theme JS*/}
				</>
			}
		</>
	);
}

export default App;
