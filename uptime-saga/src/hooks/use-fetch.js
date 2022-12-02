import axios from "axios";
const { useEffect, useState } = require("react");

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    fetchData(url, source.token, isMounted);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [url]);

  const fetchData = async (url, token, isMounted) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5000/api/v1" + url,
        cancelToken: token,
      });

      console.log("response", response);

      if (isMounted) {
        setData(response.data);
        setFetchError(null);
      }
    } catch (err) {
      if (isMounted) {
        setFetchError(err.message);
        setData([]);
      }
    } finally {
      isMounted && setIsLoading(false);
    }
  };

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, fetchError, refetch };
};

export default useFetch;
