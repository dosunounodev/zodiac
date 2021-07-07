import { useEffect, useState } from 'react';
import { getHoroscope } from 'services/getHoroscope';

const useGetHoroscope = (sign) => {
  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getHoroscope()
      .then((response) => {
        setHoroscope(response[sign]);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError('Error buscando random user');
      });
  }, [sign]);

  return { horoscope, loading, error };
};

export default useGetHoroscope;
