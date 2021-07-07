import styled from 'styled-components';

const GenderPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: calc(100vh - 100px);
  padding: 30px 0px;
`;

const StyledTitle = styled.h2`
  color: royalblue;
  text-transform: uppercase;
`;

export { GenderPageWrapper, StyledTitle };
