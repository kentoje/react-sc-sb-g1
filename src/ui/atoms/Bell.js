import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import iconStyles from '../styles/Icons';

const styles = iconStyles();

const BellWrapper = styled.div`
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

const Bell = (props) => {
  const { count } = props;

  return (
    <BellWrapper count={count}>
      <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 26.3334C12.4667 26.3334 13.6667 25.1334 13.6667 23.6667H8.33333C8.33333 25.1334 9.53333 26.3334 11 26.3334ZM19 18.3334V11.6667C19 7.57337 16.8267 4.14671 13 3.24004V2.33337C13 1.22671 12.1067 0.333374 11 0.333374C9.89333 0.333374 9 1.22671 9 2.33337V3.24004C5.18666 4.14671 2.99999 7.56004 2.99999 11.6667V18.3334L0.333328 21V22.3334H21.6667V21L19 18.3334ZM16.3333 19.6667H5.66666V11.6667C5.66666 8.36004 7.68 5.66671 11 5.66671C14.32 5.66671 16.3333 8.36004 16.3333 11.6667V19.6667Z" fill="white"/>
      </svg>
    </BellWrapper>
  );
};

Bell.propTypes = {
  count: PropTypes.number,
};

export default Bell;
