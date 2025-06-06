import React, { useState } from "react";

const Admission = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    grade: "",
    parentName: "",
    contactNumber: "",
    email: "",
    address: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8080/api/admissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Submission failed');
      }

      setSuccess(true);
      setFormData({
        studentName: "",
        grade: "",
        parentName: "",
        contactNumber: "",
        email: "",
        address: ""
      });

      setTimeout(() => setSuccess(false), 3000);

    } catch (error) {
      setError(error.message || 'An error occurred. Please try again.');
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full flex justify-center mb-6">
        <img src="./images/subheaderbg.jpg" alt="Header" className="w-full max-h-60 object-cover" />
      </div>
      <div className="flex justify-center">
        <form
          className="bg-blue-800 text-white p-8 rounded-lg w-full max-w-lg shadow-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold mb-14">Please fill the Form below to Place Admission Enquiry</h2>

          {error && (
            <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
              Admission submitted successfully!
            </div>
          )}

          <div className="space-y-4">
            <input
              type="text"
              name="studentName"
              placeholder="Name of Student"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              value={formData.studentName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="grade"
              placeholder="Admission Required For Which Grade?"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              value={formData.grade}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="parentName"
              placeholder="Parent Name"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              value={formData.parentName}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="contactNumber"
              placeholder="Contact Number"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              value={formData.contactNumber}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Residential Address"
              className="w-full p-3 rounded bg-white text-black border border-gray-300"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-red-600 text-white p-3 rounded hover:bg-red-700 font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;