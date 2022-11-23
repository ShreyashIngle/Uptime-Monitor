import { toast } from "react-toastify";
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
    //Verifying the URL format
    const urlFormat = monitor.url.trim().substring(0, 5);
    if (urlFormat !== "https") {
      return toast.error("Invalid URL");
    }

    //Make the post request
    setIsLoading(true);
    await API.post("/monitor", {
      ...monitor,
      alertsTriggeredOn: parseInt(monitor.alertsTriggeredOn),
    })
      .then((res) => {
        setIsLoading(false);
        toast.success("Monitor Created Successfully");
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.response.data.message);
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

  return {
    getAllMonitors,
    monitors,
    createMonitor,
    isLoading,
    isError,
  };
};

export default useMonitor;
