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
} from "./SignupElements";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history("/signin");
    } catch {
      setError("Failed to create an account. Please try again later");
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
              <FormH1>Sign up to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required ref={emailRef} />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required ref={passwordRef} />
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput type="password" required ref={passwordConfirmRef} />
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

              <div
                style={{
                  paddingTop: 20,
                  color: "white",
                  fontSize: 15,
                  height: 15,
                }}
              >
                Already have an account?{" "}
                <Link to="/signin" style={{ color: "#43ff64d9" }}>
                  Sign In
                </Link>
              </div>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
