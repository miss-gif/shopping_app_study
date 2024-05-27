import React from "react";
import styled from "@emotion/styled";

const ResponsiveStyle = styled.div`
  margin: 20px auto;
  padding: 0px 1rem;
  width: 1200px;

  @media screen and (max-width: 1024px) {
    width: ${props => props.mWidth || "768px"};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveStyle {...rest}>{children}</ResponsiveStyle>;
};

export default Responsive;
