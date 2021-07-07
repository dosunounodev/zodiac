import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IconContainer = styled.div`
  width: 100px;
  cursor: pointer;
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  ${({ activeGender }) =>
    activeGender &&
    css`
      background-color: #eaeaea;
    `}
`;

export { Wrapper, IconContainer };
