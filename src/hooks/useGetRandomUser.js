import { useEffect, useState } from 'react';
import { getRandomUser } from 'services/getRandomUser';

const useGetRandomUser = () => {
  const [randomUser, setRandomUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getRandomUser()
      .then((response) => {
        setRandomUser(response);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError('Error buscando random user');
      });
  }, []);

  return { randomUser, loading, error };
};

export default useGetRandomUser;
