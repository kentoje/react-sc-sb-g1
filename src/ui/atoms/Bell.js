import React from "react";
import styled from "styled-components";

const BellWrapper = styled.div`
  max-height: 20px;
`;

const Bell = () => {
  return (
    <BellWrapper>
      <svg width="22" height="27" viewBox="0 0 22 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 26.3334C12.4667 26.3334 13.6667 25.1334 13.6667 23.6667H8.33333C8.33333 25.1334 9.53333 26.3334 11 26.3334ZM19 18.3334V11.6667C19 7.57337 16.8267 4.14671 13 3.24004V2.33337C13 1.22671 12.1067 0.333374 11 0.333374C9.89333 0.333374 9 1.22671 9 2.33337V3.24004C5.18666 4.14671 2.99999 7.56004 2.99999 11.6667V18.3334L0.333328 21V22.3334H21.6667V21L19 18.3334ZM16.3333 19.6667H5.66666V11.6667C5.66666 8.36004 7.68 5.66671 11 5.66671C14.32 5.66671 16.3333 8.36004 16.3333 11.6667V19.6667Z" fill="white"/>
      </svg>
    </BellWrapper>
  );
};

export default Bell;