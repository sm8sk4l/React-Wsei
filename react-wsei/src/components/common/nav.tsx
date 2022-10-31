import React, { FC } from "react";
import styled from "styled-components";

const Navbar = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Nav: React.FC<{}> = () => {
  return <Navbar />;
};
