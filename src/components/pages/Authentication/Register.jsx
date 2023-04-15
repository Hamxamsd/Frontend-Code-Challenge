import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
  // State variables for name, email, password and confirm password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Navigate function from react-router-dom
  const navigate = useNavigate();

  // Functions to handle the changes in the input fields
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      return alert("Passwords do not match!");
    }

    // Create a user object with the input fields
    const user = {
      name,
      email,
      password,
    };

    // Save user object to local storage
    localStorage.setItem("user", JSON.stringify(user));

    // Show success message and redirect to home page
    alert("User Successfuly Added!");
    navigate("/");
    window.location.reload();
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-5">Register</h1>
      <Form onSubmit={handleSubmit}>
        {/* Input field for name */}
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </Form.Group>

        {/* Input field for email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Form.Group>

        {/* Input field for password */}
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Form.Group>

        {/* Input field for confirm password */}
        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant="dark" type="submit" className="mt-2">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
