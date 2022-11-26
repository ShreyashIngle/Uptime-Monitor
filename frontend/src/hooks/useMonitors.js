import axios from "axios";
import { useDispatch } from "react-redux";
import { setMonitors } from "../features/monitorsSlice";
const { useEffect, useState } = require("react");

const useMonitors = async () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  console.log("data from useMonitors", data);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    fetchData("/monitor", source.token, isMounted);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, []);

  const fetchData = async (url, token, isMounted) => {
    setIsLoading(true);
    try {
      const response = await axios({
        method: "get",
        url: url,
        cancelToken: token,
      });

      console.log("response", response);

      if (isMounted) {
        setData(response.data);
        dispatch(setMonitors(response.data));
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

  const refetch = () =>{
    console.log('refetched')
    fetchData();
  }
  return { data, isLoading, fetchError  , refetch};
};

export default useMonitors;
