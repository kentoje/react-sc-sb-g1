import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const BubbleWrapper = styled.div`
  position: relative;
  max-height: 20px;
  
  &::after {
    position: absolute;
    top: -5px;
    right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 18px;
    width: 18px;
    color: #fff;
    background-color: red;
    font-family: 'Avenir', sans-serif;
    font-size: 12px;
    border-radius: 1000px;
    content: "${props => (props.count ? props.count : '')}";
  }
`;

const Bubble = (props) => {
  const { count } = props;

  return (
    <BubbleWrapper count={count}>
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.6667 0.666626H3.33334C1.86667 0.666626 0.666672 1.86663 0.666672 3.33329V27.3333L6 22H24.6667C26.1333 22 27.3333 20.8 27.3333 19.3333V3.33329C27.3333 1.86663 26.1333 0.666626 24.6667 0.666626ZM24.6667 19.3333H6L3.33334 22V3.33329H24.6667V19.3333Z" fill="white"/>
      </svg>
    </BubbleWrapper>
  );
};

Bubble.propTypes = {
  count: PropTypes.number,
};

export default Bubble;
