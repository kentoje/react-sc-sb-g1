import React from "react";
import styled from "styled-components";

const BubbleWrapper = styled.div`
  max-height: 20px;
`;

const Bubble = () => {
  return (
    <BubbleWrapper>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.6667 0.666626H3.33334C1.86667 0.666626 0.666672 1.86663 0.666672 3.33329V27.3333L6 22H24.6667C26.1333 22 27.3333 20.8 27.3333 19.3333V3.33329C27.3333 1.86663 26.1333 0.666626 24.6667 0.666626ZM24.6667 19.3333H6L3.33334 22V3.33329H24.6667V19.3333Z" fill="white"/>
      </svg>
    </BubbleWrapper>
  );
};

export default Bubble;