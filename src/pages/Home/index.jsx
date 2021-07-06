import React from 'react';
import useGetRandomUser from 'hooks/useGetRandomUser';
import Loader from 'components/Loader';
import Button from 'components/Button';
import RandomUser from 'components/RandomUser';
import Error from 'components/Error';
import { HomeWrapper, HomeText } from './styles';

const Home = () => {
  const { randomUser, loading, error } = useGetRandomUser();

  return (
    <HomeWrapper>
      {error ? (
        <>
          <Error errormsj={error}></Error>
          <br />
          <br />
          <br />
          <HomeText>Descubrí tu Horóscopo:</HomeText>
          <Button isLink to="/Gender">
            Ingresar
          </Button>
        </>
      ) : loading ? (
        <Loader />
      ) : (
        <>
          <RandomUser user={randomUser} />
          <HomeText>Descubrí el tuyo!</HomeText>
          <Button isLink to="/Gender">
            Ingresar
          </Button>
        </>
      )}
    </HomeWrapper>
  );
};

export default Home;
