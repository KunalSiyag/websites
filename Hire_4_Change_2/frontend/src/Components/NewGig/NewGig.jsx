import React, { useState, useEffect } from 'react';
import './NewGig.css';

const NewGig = () => {
  const [formData, setFormData] = useState({
    title: '',
    fromDateTime: '',
    toDateTime: '',
    publisher: '',
    type: 'on-site',
    address: '',
    street: '',
    city: '',
    state: '',
    country: 'India',
    pincode: '',
    keywords: '',
    description: '',
    category: '',
    otherCategory: '',
    skillsRequired: '',
    experienceLevel: 'beginner',
    images: [],
    priceQuote: {
      amount: '',
      currency: '₹',
      rateType: 'hourly'
    }
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [response, setResponse] = useState(null);
  const [activeSection, setActiveSection] = useState('basic');

  useEffect(() => {
    const username = localStorage.getItem("username");
    setFormData(prevData => ({ ...prevData, publisher: username }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePriceQuoteChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      priceQuote: {
        ...prevData.priceQuote,
        [name]: value
      }
    }));
  };  const handleTypeChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, type: value });
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setFormData({ ...formData, category: value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({ ...formData, images: [...formData.images, ...files] });

    // Preview images
    const newPreviews = files.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...newPreviews]);
  };

  const removeImage = (index) => {
    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });

    const newPreviews = [...imagePreviews];
    newPreviews.splice(index, 1);
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSubmit = { ...formData };

    dataToSubmit.keywords = formData.keywords.split(',').map(k => k.trim());
    dataToSubmit.skillsRequired = formData.skillsRequired.split(',').map(s => s.trim());
    
    if (formData.type !== 'remote') {
      dataToSubmit.location = {
        address: formData.address,
        street: formData.street,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        pincode: formData.pincode,
        coordinates: {
          type: "Point",
          coordinates: [0, 0] // You can add actual coordinates
        }
      };
    }

    if (formData.category === 'other') {
      dataToSubmit.category = formData.otherCategory;
    }

    // Convert images to base64
    dataToSubmit.images = await Promise.all(formData.images.map(async (file) => {
      const base64 = await convertToBase64(file);
      return { image: base64 };
    }));

    // Ensure priceQuote.amount is a number
    dataToSubmit.priceQuote.amount = parseFloat(dataToSubmit.priceQuote.amount);

    try {
      const res = await fetch('https://us-central1-hire4change.cloudfunctions.net/database/create-job-listing', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSubmit),
      });
      const result = await res.json();
      setResponse({ message: `Job listing created successfully! Job ID: ${result.job_id}`, type: 'success' });
    } catch (error) {
      setResponse({ message: 'Failed to create job listing.', type: 'error' });
    }
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = (error) => reject(error);
    });
  };

  const renderSection = (section) => {
    switch(section) {
      case 'basic':
        return (
          <div className="form-section">
            <h2>Basic Information</h2>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="fromDateTime">From Date and Time:</label>
            <input
              type="datetime-local"
              id="fromDateTime"
              name="fromDateTime"
              value={formData.fromDateTime}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="toDateTime">To Date and Time:</label>
            <input
              type="datetime-local"
              id="toDateTime"
              name="toDateTime"
              value={formData.toDateTime}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="type">Type:</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleTypeChange}
              required
            >
              <option value="on-site">On-site</option>
              <option value="remote">Remote</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        );
      case 'location':
        return (
          <div className="form-section">
            <h2>Location Details</h2>
            {formData.type !== 'remote' && (
              <>
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />

                <label htmlFor="street">Street:</label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={formData.street}
                  onChange={handleInputChange}
                />

                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />

                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                />

                <label htmlFor="pincode">Pincode:</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                />
              </>
            )}
          </div>
        );
      case 'details':
        return (
          <div className="form-section">
            <h2>Job Details</h2>
            <label htmlFor="keywords">Keywords (comma-separated):</label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              value={formData.keywords}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              value={formData.description}
              onChange={handleInputChange}
              required
            ></textarea>

            <label htmlFor="amount">Price Quote Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.priceQuote.amount}
              onChange={handlePriceQuoteChange}
              step="0.01"
              required
            />

            <label htmlFor="currency">Currency:</label>
            <select
              id="currency"
              name="currency"
              value={formData.priceQuote.currency}
              onChange={handlePriceQuoteChange}
              required
            >
              <option value="₹">INR (₹)</option>
              <option value="$">USD ($)</option>
              <option value="€">EUR (€)</option>
              <option value="£">GBP (£)</option>
            </select>

            <label htmlFor="rateType">Rate Type:</label>
            <select
              id="rateType"
              name="rateType"
              value={formData.priceQuote.rateType}
              onChange={handlePriceQuoteChange}
              required
            >
              <option value="hourly">Hourly</option>
              <option value="fixed">Fixed</option>
              <option value="daily">Daily</option>
            </select>
          </div>
        );      case 'category':
        return (
          <div className="form-section">
            <h2>Category and Skills</h2>
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Domestic Services">Domestic Services</option>
              <option value="other">Other</option>
            </select>

            {formData.category === 'other' && (
              <input
                type="text"
                id="otherCategory"
                name="otherCategory"
                placeholder="Specify other category"
                value={formData.otherCategory}
                onChange={handleInputChange}
                required
              />
            )}

            <label htmlFor="skillsRequired">Skills Required (comma-separated):</label>
            <input
              type="text"
              id="skillsRequired"
              name="skillsRequired"
              value={formData.skillsRequired}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="experienceLevel">Experience Level:</label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleInputChange}
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="expert">Expert</option>
            </select>
          </div>
        );
      case 'images':
        return (
          <div className="form-section">
            <h2>Images</h2>
            <div className="image-upload">
              <label htmlFor="images">Upload Images:</label>
              <input 
                type="file" 
                id="images" 
                name="images" 
                accept="image/*" 
                multiple 
                onChange={handleImageChange} 
              />
              <div id="imageContainer">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="image-preview">
                    <img src={preview} alt="Preview" />
                    <button type="button" onClick={() => removeImage(index)}>Remove</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="job-listing-form">
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-sections">
          <button type="button" onClick={() => setActiveSection('basic')}>Basic Info</button>
          <button type="button" onClick={() => setActiveSection('location')}>Location</button>
          <button type="button" onClick={() => setActiveSection('details')}>Job Details</button>
          <button type="button" onClick={() => setActiveSection('category')}>Category & Skills</button>
          <button type="button" onClick={() => setActiveSection('images')}>Images</button>
        </div>

        {renderSection(activeSection)}

        <button type="submit">Submit</button>
      </form>

      {response && (
        <div className={response.type === 'success' ? 'success' : 'error'}>
          {response.message}
        </div>
      )}
    </div>
  );
};

export default NewGig;
