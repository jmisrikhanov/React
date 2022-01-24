import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Content, Desc, Left, Section, Title, Button } from "./HomeStyles";

const Hero = () => {
  return (
    <Section>
      <Content>
        <Left>
          <Title>
            Get 2 FREE stocks <br /> valued up to $1850!
          </Title>
          <Desc>
            Open and fund a brokerage account with $100 or more and you will
            have a chance of claiming stocks like <span>GOOG, FB, SBUX</span>{" "}
            and more!
          </Desc>
          <Button href="https://bit.ly/webull-join" target="_blank">
            <span>Claim your free stocks now</span>
            <MdKeyboardArrowRight />
          </Button>
        </Left>
      </Content>
    </Section>
  );
};

export default Hero;
