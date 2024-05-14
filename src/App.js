// frontend/src/App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {

  // the users
  const [users, setUsers] = useState([])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const getUsers = async () => {
    await fetch('http://localhost:5000/api/get-data')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      })
      .catch(e => console.log('An error in fetching users: ', e))
  }

  return (
    <div className="App">
      <h1>React Form</h1>
      <form style={{ display: "flex", flexDirection: "column", paddingLeft: "30px", paddingRight: "30px", gap: "10px" }} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <h3>
        User information

      </h3>
      <div>
        <button onClick={getUsers}>Get users</button>
        {users.map((u, i) => (
          <div key={i}>
            <li>{u.name} </li>
            <li>{u.email} </li>
            <li>{u.message} </li>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
