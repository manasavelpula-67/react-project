import React from "react";

function AboutUs() {
    return (
        <div
            className="container-fluid p-3"
            style={{
                minHeight: "100vh",
                background: "linear-gradient(to bottom, #f8f9fa, #e9ecef)",
                fontFamily: "'Poppins', sans-serif",
            }}
        >
            <div
                className="container mt-5"
                style={{ minHeight: "calc(100vh - 130px)" }}
            >
                <div className="card shadow-lg rounded-lg h-100">
                    <div
                        className="card-header bg-primary text-white"
                        style={{ fontWeight: "bold", fontSize: "2rem" }}
                    >
                        <h1 className="text-center">About Us</h1>
                    </div>
                    <div className="card-body" style={{ lineHeight: "1.8" }}>
                        <h2 className="mb-4 text-secondary" style={{ fontWeight: "600" }}>
                            Welcome to Our Webpage
                        </h2>
                        <p className="lead text-dark">
                            Here you can find all the information about our webpage. We
                            strive to provide the best content and user experience to our
                            audience. Feel free to explore and learn more about what we have
                            to offer.
                        </p>
                        <h3
                            className="text-primary"
                            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                        >
                            What We Do
                        </h3>
                        <p className="text-dark">
                            Our mission is to deliver quality content and services that
                            cater to your needs. Whether it's information, services, or
                            resources, we aim to exceed your expectations.
                        </p>
                        <h3
                            className="text-primary"
                            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                        >
                            Our Team
                        </h3>
                        <p className="text-dark">
                            We are a team of passionate individuals dedicated to creating
                            value for our users. Our expertise spans multiple domains,
                            ensuring a diverse and enriching experience.
                        </p>
                        <h3
                            className="text-primary"
                            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                        >
                            Our Vision
                        </h3>
                        <p className="text-dark">
                            We believe in innovation, excellence, and continuous
                            improvement to provide you with a seamless and enriching
                            experience. Join us on this journey to discover new
                            possibilities.
                        </p>
                        <h3
                            className="text-primary"
                            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
                        >
                            Contact Us
                        </h3>
                        <p className="text-dark">
                            Feel free to reach out for any inquiries or feedback. We are
                            here to assist you.
                        </p>
                    </div>
                    <div
                        className="card-footer text-center"
                        style={{ fontWeight: "500", fontSize: "1rem" }}
                    >
                        <button
                            className="btn btn-outline-light bg-warning"
                            style={{
                                fontWeight: "bold",
                                fontSize: "1.1rem",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
