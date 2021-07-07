import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUserData } from '../../redux';
import Button from 'components/Button';
import {
  StyledForm,
  InputWrapper,
  StyledInput,
  StyledAlert,
  ButtonsWrapper,
} from './style';

const Form = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (data) => {
    dispatch(setUserData(data));
    history.push('/horoscope');
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <StyledInput
          type="text"
          placeholder="Name"
          {...register('Name', { required: true, min: 6, maxLength: 80 })}
        />
        {errors.Name && <StyledAlert>No olvides tu nombre!</StyledAlert>}

        <StyledInput
          type="email"
          placeholder="Email"
          {...register('Email', {
            required: true,
            pattern: /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i,
          })}
        />
        {errors.Email && <StyledAlert>Escribe un mail válido</StyledAlert>}

        <StyledInput
          type="date"
          placeholder="Date"
          {...register('Date', { required: true })}
        />
        {errors.Date && (
          <StyledAlert>Coloca tu fecha de nacimiento</StyledAlert>
        )}
      </InputWrapper>
      <ButtonsWrapper>
        <Button>VER HORÓSCOPO</Button>
        {children}
      </ButtonsWrapper>
    </StyledForm>
  );
};

export default Form;
