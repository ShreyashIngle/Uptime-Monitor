const { default: API } = require("api/axios");
const { useState } = require("react");

const useMonitor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const createMonitor = async (monitor) => {
    setIsLoading(true);
    await API.post("", monitor)
      .then((res) => {
        setIsLoading(false);
        console.log("res", res);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(false);
      });
  };

  return { createMonitor, isLoading, isError };
};

export default useMonitor