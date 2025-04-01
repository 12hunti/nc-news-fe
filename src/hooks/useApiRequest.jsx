import { useEffect, useState } from "react";


const useApiRequest = (apiFunction, errorMessage, ...args) => {
    const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    apiFunction(...args)
      .then((response) => {
        setData(response.articles || response);
      })
      .catch((err) => {
        console.log(err);
        setError({ status: 404, msg: errorMessage });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [...args]);

  return {data, isLoading, error}

}

export default useApiRequest
