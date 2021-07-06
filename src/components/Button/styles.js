import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  padding: 10px 30px;
  font-size: 1, 8rem;
  font-weight: bold;
  text-transform: uppercase;
  color: #fff;
  background-color: #f0975c;
  border: none;
  border-radius: 10px;
`;

const StyledButton = StyledLink.withComponent('button');

export { StyledButton, StyledLink };
