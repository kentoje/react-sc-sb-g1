import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import iconStyles from '../styles/Icons';

const styles = iconStyles();

const BubbleWrapper = styled.div`
  position: relative;
  max-height: 20px;
  
  &::after {
    position: absolute;
    top: -7px;
    right: -5px;
    display: ${props => (props.count > 0 ? styles.display.flex : styles.display.none)};
    align-items: center;
    justify-content: center;
    height: 20px;
    width: ${props => (props.count > 10 ? styles.width.big : styles.width.small)};
    color: #fff;
    background-color: red;
    font-family: 'Avenir', sans-serif;
    font-size: 12px;
    border-radius: 1000px;
    border: 1px solid #000000;
    box-sizing: border-box;
    content: "${props => (props.count > 10 ? styles.content.gtTen : !props.count ? styles.content.ltZero : props.count)}";
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
