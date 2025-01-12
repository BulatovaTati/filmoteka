import { useEffect, useState } from 'react';

export const useHttp = fn => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fn();
        setData(data);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [fn]);

  return [data, setData, isLoading, isError];
};
