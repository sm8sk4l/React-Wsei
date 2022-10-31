import { Link } from "react-router-dom";
import { FC } from "react";
import styled from "styled-components";
import { Layout } from "./layout";
import { colorStack } from "../style/colorStack";

const Wrapper = styled.div`
  width: 100vw;
  border: 10px solid ${colorStack.alpaca};
`;

const SecondSpan = styled.span`
  border: 3px solid yellow;
`;

const ExampleDiv = styled.div`
backgorund: yellow;
}`;
export const Menu: FC = () => {
  return (
    <Wrapper>
      <SecondSpan>jakiś span</SecondSpan>
      <ExampleDiv>jakis div</ExampleDiv>
      <ExampleDiv>jakis div</ExampleDiv>
      <Link to="posts">Posts</Link>
      <Link to="/">Home</Link>
    </Wrapper>
  );
};
