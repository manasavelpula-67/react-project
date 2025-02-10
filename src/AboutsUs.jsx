import React from "react";

function AboutsUs() {
    return (
        <div className="container-fluid p-3 m-3" style={{ minHeight: "100vh" }}>

            <div className="container mt-5" style={{ minHeight: "calc(100vh - 130px)" }}>
                <div className="card shadow-lg h-100">
                    <div className="card-header bg-primary text-white">
                        <h1 className="text-center">About Us</h1>
                    </div>
                    <div className="card-body">
                        <h2 className="mb-4">Welcome to Our Webpage</h2>
                        <p className="lead">
                            Here you can find all the information about our webpage. We strive to provide the best content and user experience to our audience. Feel free to explore and learn more about what we have to offer.
                        </p>
                        <h3>What We Do</h3>
                        <p>
                            Our mission is to deliver quality content and services that cater to your needs. Whether it's information, services, or resources, we aim to exceed your expectations.
                        </p>
                        <h3>Our Team</h3>
                        <p>
                            We are a team of passionate individuals dedicated to creating value for our users. Our expertise spans multiple domains, ensuring a diverse and enriching experience.
                        </p>
                        <h3>Our Vision</h3>
                        <p>
                            We believe in innovation, excellence, and continuous improvement to provide you with a seamless and enriching experience. Join us on this journey to discover new possibilities.
                        </p>
                        <h3>Contact Us</h3>
                        <p>
                            Feel free to reach out for any inquiries or feedback. We are here to assist you.
                        </p>
                    </div>
                    <div className="card-footer text-center">
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutsUs;
