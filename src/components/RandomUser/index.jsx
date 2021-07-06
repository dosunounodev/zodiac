import React from 'react';
import { StyledUser, StyledAvatar, StyledUserText } from './styles';

const RandomUser = ({ user }) => {
  const gender = user?.gender === 'male' ? 'El' : 'Ella';
  const name = `${user?.name.first} ${user?.name.last}`;
  const avatar = user?.picture.large;

  return (
    <StyledUser>
      <StyledAvatar>
        <img src={avatar} alt="" />
      </StyledAvatar>
      <StyledUserText>
        {gender} es {name} y ya sabe su Horóscopo de hoy.
      </StyledUserText>
    </StyledUser>
  );
};

export default RandomUser;
