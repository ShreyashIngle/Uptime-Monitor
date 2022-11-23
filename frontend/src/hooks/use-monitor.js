const { default: API } = require("api/axios");
const { useState, useEffect } = require("react");

const useMonitor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [monitors, setMonitors] = useState([]);

  useEffect(() => {
    getAllMonitors();
  }, []);

  const createMonitor = async (monitor) => {
    setIsLoading(true);
    await API.post("/monitor", monitor)
      .then((res) => {
        setIsLoading(false);
        console.log("res", res);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(false);
      });
  };

  const getAllMonitors = async () => {
    setIsLoading(true);
    await API.get("/monitor")
      .then((res) => {
        setIsLoading(false);
        setMonitors(res.data);
        console.log("res", res);
      })
      .catch((error) => {
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      });
  };
  
  return { getAllMonitors, monitors, createMonitor, isLoading, isError };
};

export default useMonitor;
