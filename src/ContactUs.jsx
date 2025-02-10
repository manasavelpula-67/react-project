import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
    return (
        <div className="container mt-5 p-5 bg-white align-items-center">
            {/* Header Section */}
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="display-4 fw-bold fst-italic text-danger">Contact Us</h1>
                    <h2 className="text-muted mt-3">
                        We'd love to hear from you! Reach out to us using the form below or the contact details provided.
                    </h2>
                </div>
            </div>

            {/* Contact Form */}
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <form className="p-4 ">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label text-secondary">
                                Name
                            </label>
                            <input
                                type="text"
                                className="form-control border-primary"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-secondary">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control border-success"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label text-secondary">
                                Message
                            </label>
                            <textarea
                                className="form-control border-danger"
                                id="message"
                                rows="5"
                                placeholder="Write your message"
                            ></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success px-4 py-2">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Contact Details */}
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 text-center">
                    <h3 className="text-primary">Contact Details</h3>
                    <p className="text-muted">
                        <strong>Email:</strong> <span className="text-danger">theproduct@gmail.com</span>
                    </p>
                    <p className="text-muted">
                        <strong>Phone:</strong> <span className="text-success">6093849789</span>
                    </p>
                    <p className="text-muted">
                        <strong>Address:</strong> <span className="text-warning">Hyderabad, Telangana, India</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
