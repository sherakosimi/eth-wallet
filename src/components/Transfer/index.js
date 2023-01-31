import React, { useState, useRef } from "react";

import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./TransferElements";

const TransferSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
}) => {
  console.log(primary);

  const [balances, setBalance] = useState(1);

  const [error, setError] = useState("");
  const recipientRef = useRef();
  const amountRef = useRef();

  const [loading, setLoading] = useState(false);

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Balance: {balances} ETH</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>
                  Send ETH to any crypto wallet
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <FormContent>
                <Form action="#">
                  <FormH1>Send ETH</FormH1>
                  <FormLabel htmlFor="for">Recipient Address</FormLabel>
                  <FormInput type="text" required ref={recipientRef} />
                  <FormLabel htmlFor="for">Amount</FormLabel>
                  <FormInput type="text" required ref={amountRef} />

                  <FormButton type="submit" disabled={loading}>
                    Send
                  </FormButton>
                  {error ? (
                    <FormLabel
                      style={{ marginTop: 10, color: "red" }}
                      htmlFor="for"
                    >
                      {error}
                    </FormLabel>
                  ) : null}
                </Form>
              </FormContent>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default TransferSection;
