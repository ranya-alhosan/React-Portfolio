import React, { useState } from "react";
import useContactForm from "./useContactForm";

function Contact(){
    const { sendEmail, loading, success, error } = useContactForm();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      comment: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      await sendEmail(formData);
      setFormData({ name: "", email: "", comment: "" }); // Reset form
    };
  
    return (
      <section className="section" id="contact">
        <div className="container text-center">
          <p className="section-subtitle">How can you communicate?</p>
          <h6 className="section-title mb-5">Contact Me</h6>
          <form
            onSubmit={handleSubmit}
            className="contact-form col-md-10 col-lg-8 m-auto"
          >
            <div className="form-row">
              <div className="form-group col-sm-6">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="form-group col-sm-12">
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  rows="6"
                  className="form-control"
                  placeholder="Write Something"
                ></textarea>
              </div>
              <div className="form-group col-sm-12 mt-3">
                <input
                  type="submit"
                  value={loading ? "Sending..." : "Send Message"}
                  className="btn btn-outline-primary rounded"
                  disabled={loading}
                />
              </div>
            </div>
          </form>
          {success && <p className="text-success mt-3">Message sent successfully!</p>}
          {error && <p className="text-danger mt-3">{error}</p>}
        </div>
      </section>
    );

}
export default Contact