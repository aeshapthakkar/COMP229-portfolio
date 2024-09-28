import { useState } from 'react';
import './ContactMe.css';
const ContactMe = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contactNo: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Process form data here
  };

  return (
    <div class="frame">
    <div>
      <div className="contact-form-container">
        <h1>Contact Me</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Contact Number</label>
          <input type="tel" name="contactNo" value={formData.contactNo} onChange={handleChange} required />

          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default ContactMe;
