import styled, { css } from 'styled-components';

const smallWidth = 100 / 3;
const midWidth = 100 / 4;
const wideWidth = 100 / 5;

const Col = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  ${() => {
    return css`
      flex-basis: ${smallWidth}%;
      max-width: ${smallWidth}%;
    `;
  }}

  @media (min-width: 1024px) {
    ${() => {
      return css`
        flex-basis: ${midWidth}%;
        max-width: ${midWidth}%;
      `;
    }}
  }

  @media (min-width: 1280px) {
    ${() => {
      return css`
        flex-basis: ${wideWidth}%;
        max-width: ${wideWidth}%;
      `;
    }}
  }
`;

export default Col;
