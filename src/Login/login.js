import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Login() {

  const [username, setLogin] = useState("");

  const [password, setPassword] = useState("");

  function checkLength() {

    return username.length > 0 && password.length > 0;

  }

  function handleLogin(event) {
    event.preventDefault();
    console.log(username);
    console.log(password);
  }

  return (
    <div className="Login">
      <Form onSubmit={handleLogin}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={username}
            onChange={(e) => setLogin(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!checkLength()}>
          Login
        </Button>
      </Form>
    </div>
  );

}