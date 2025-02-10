import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
    return (
        <div className="container mt-5 m-5 p-3">
            <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h1 className="display-4 text-danger">Contact Us</h1>
                    <h2 className="text-secondary mt-3">We'd love to hear from you! Reach out to us using the form below or the contact details provided.</h2>
                </div>
            </div>
            <div className="row justify-content-center mt-4">
                <div className="col-md-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="5" placeholder="Write your message"></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-8 text-center">
                    <h3 className="text-secondary">Contact Details</h3>
                    <p><strong>Email:</strong> theproduct@gmail.com</p>
                    <p><strong>Phone:</strong> 6093849789</p>
                    <p><strong>Address:</strong> Hyderabad, Telangana, India</p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
