import styled from 'styled-components';

const StepBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  max-width: 270px;
  margin-bottom: 20px;
  background-color: #fff;
  &::after,
  &::before {
    content: '';
    position: absolute;
    left: 40px;
    width: 65px;
    height: 4px;
    background-color: royalblue;
  }
  &::before {
    left: initial;
    right: 40px;
  }
`;

const StyledIcon = styled.i`
  font-size: 3.2rem;
  color: #f0975c;
`;

export { StepBar, StyledIcon };
