import React, { useRef, useState } from "react";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./SigninElements";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history("/");
    } catch {
      setError("Failed to log in. Please try again later");
    }
    setLoading(false);
  }
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">EZ Wallet</Icon>
          <FormContent>
            <Form action="#" onSubmit={handleSubmit}>
              <FormH1>Sign In to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required ref={emailRef} />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required ref={passwordRef} />

              <FormButton type="submit" disabled={loading}>
                Continue
              </FormButton>
              {error ? (
                <FormLabel
                  style={{ marginTop: 10, color: "red" }}
                  htmlFor="for"
                >
                  {error}
                </FormLabel>
              ) : null}

              <div style={{ paddingTop: 40, color: "white", fontSize: 15 }}>
                Forgot Password
              </div>
              <div
                style={{
                  paddingTop: 20,
                  color: "white",
                  fontSize: 15,
                  height: 15,
                }}
              >
                Don't have an account?{" "}
                <Link to="/signup" style={{ color: "#43ff64d9" }}>
                  Sign Up
                </Link>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
