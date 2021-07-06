import styled from 'styled-components';

const StyledUser = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
`;

const StyledAvatar = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

const StyledUserText = styled.p`
  width: 200px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-size: 2rem;
  text-align: center;
`;

export { StyledUser, StyledAvatar, StyledUserText };
