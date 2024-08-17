import { useEffect, useState } from "react";

const useFetch = (url) => {

  const options = {};

  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log("there is an error in api: ", error);
      }
    };

    fetchApi();
  }, [url]);

  return { data, loading };
};

export default useFetch;
