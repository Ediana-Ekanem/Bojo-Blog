import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Setting a time out for one second
    setTimeout(() => {
      fetch(url)
        .then((response) => {
          console.log(response);
          //If there is no connection error but you're not getting the intended data
          // is the response okay if it isn't thro an error
          if (!response.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })

        //It will catch any kind of network error (if we can't connect)
        .catch((err) => {
          setError(err.message);
          setIsLoading(false);
        });
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
  return <div></div>;
};

export default useFetch;
