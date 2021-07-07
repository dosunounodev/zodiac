import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const StyledInput = styled.input`
  width: 280px;
  margin: 5px 0;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 10px;
  outline: none;
  border: 2px solid royalblue;
`;

const StyledAlert = styled.span`
  margin: 0;
  font-size: 1.3rem;
  color: crimson;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-end;

  button {
    margin-bottom: 10px;
  }
`;

export { StyledForm, InputWrapper, StyledInput, StyledAlert, ButtonsWrapper };
