import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGetLocation } from 'hooks/useGetLocation';
import { StyledIcon } from './styles';

const PageNav = () => {
  const location = useGetLocation();
  const history = useHistory();

  const handleBack = () => {
    switch (location) {
      case 'Tu Género':
        history.push('/');
        break;
      case 'Tus Datos':
        history.push('/gender');
        break;
      case 'Tu Horóscopo':
        history.push('/dataform');
        break;
      default:
        history.push('/');
    }
  };

  return (
    <>
      {location === 'Bienvenidx' ? (
        <StyledIcon className="fas fa-home"></StyledIcon>
      ) : (
        <StyledIcon
          className="fas fa-arrow-left"
          onClick={() => handleBack()}
        ></StyledIcon>
      )}
    </>
  );
};

export default PageNav;
