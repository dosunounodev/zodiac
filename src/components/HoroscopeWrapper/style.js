import styled from 'styled-components';

const HoroscopeContainer = styled.article`
  width: 100%;
  max-width: 280px;
`;

const StyledText = styled.p`
  text-align: center;
  margin-bottom: 10px;
  span {
    display: block;
    font-weight: bold;
    color: #f0975c;
  }
`;

export { HoroscopeContainer, StyledText };
