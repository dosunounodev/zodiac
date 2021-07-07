import styled from 'styled-components';

const HoroscopePageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 100px);
  padding: 30px 0px;
`;

const StyledTitle = styled.h2`
  color: royalblue;
  font-size: 1.8rem;
  max-width: 20ch;
  margin: 20px 0;
  text-align: center;
  span {
    color: #f0975c;
  }
`;

export { HoroscopePageWrapper, StyledTitle };
