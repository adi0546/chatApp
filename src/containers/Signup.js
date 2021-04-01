import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Signup.css";

export default function Signup() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({ pwd: ""});
  
    function validateForm() {
        
        let isValid = true ;
        if (password !== confirmPassword){
            isValid = false;
            setErrors({pwd: "Passwords don't match"});
        }
        return isValid;
    }

    function setDefaultState(){
        setName("");
        setPassword("");
        setEmail("");
        setConfirmPassword("");
        setErrors({pwd: ""});
    }
  
    function handleSubmit(event) {
      event.preventDefault();

      if(validateForm()){
        alert('Form submitted')
        setDefaultState();
      }
    }
  
    return (
      <div className="Signup">
        <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
            <Form.Label>Name</Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={name}
              required
              onChange={(e) => {setName(e.target.value); /*console.log(e)*/}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              required
              onChange={(e) => {setEmail(e.target.value); /*console.log(e)*/}}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmPassword}
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="text-danger">{errors.pwd}</div>
          </Form.Group>
          <Button block size="lg" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }