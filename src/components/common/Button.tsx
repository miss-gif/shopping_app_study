import React from "react";
import styled from "@emotion/styled";
import { colorArr, colorSystem } from "../../styles/color";

const ButtonStyle = styled.button`
  border: 1px solid ${colorSystem.p600};
  background-color: #fff;
  color: ${colorSystem.p600};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 16px;

  &:hover {
    border: 1px solid #fff;
    background-color: ${colorSystem.p400};
    color: ${colorSystem.p700};
  }

  &:active {
    border: 1px solid ${colorArr.primary[0]};
    background-color: ${colorArr.primary[0]};
    color: #fff;
  }
`;

interface Props {
  label: string
  onClick?: () => void
}

const Button = ({ label = "버튼", onClick }:Props) => {
  return (
    <div>
      <ButtonStyle onClick={onClick}>{label}</ButtonStyle>
    </div>
  );
};

export default Button;
