import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: flex;
  flex: 0;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 10px 30px;
  margin: 0 auto;
  font-size: 1, 8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #f0975c;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition-property: color, background-color;
  transition-duration: 0.3s;
  transition-timing-function: linear;
  &:hover {
    background-color: royalblue;
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: royalblue;
      &:hover {
        background-color: #f0975c;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      /* pointer-events: none; */
      cursor: not-allowed;
      background-color: #eaeaea;
      &:hover {
        background-color: #eaeaea;
      }
    `}
`;

const StyledButton = StyledLink.withComponent('button');

export { StyledButton, StyledLink };
