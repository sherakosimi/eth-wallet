import React, { useState } from "react";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";

function HeroSection({ auth }) {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Welcome to EZ Wallet</HeroH1>
        {auth ? (
          <HeroP>
            Send Ethereum with ease. Make sure you have Metamask extension
            installed on your Google Chrome browser
          </HeroP>
        ) : (
          <HeroP>
            Send Ethereum with ease. Sign up to get access to our crypto service
          </HeroP>
        )}

        <HeroBtnWrapper>
          <Button
            to={auth ? "about" : "signup"}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            primary="true"
            dark="true"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            {auth ? "Transfer ETH" : "Get Started"}
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
