import React from "react";
import {
  AboutContainer,
  HeaderContainer,
  InfoContainer,
  StyledImage,
} from "./AboutStyle";
import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer>
      <StyledImage src={codingSvg} alt="coding" />
      <HeaderContainer>
        <h1>Lorem ipsum dolor sit amet.</h1>
      </HeaderContainer>
      <InfoContainer>
        <h1>Lorem, ipsum.</h1>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <h2>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
          inventore commodi ea soluta eius repellat!
        </h2>
        <h2>
          <a href="mailto:lorem@gmail.com">Send email</a> : loremipsum@gmail.com
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
