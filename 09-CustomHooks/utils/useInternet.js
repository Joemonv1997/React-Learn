import { useEffect, useState } from "react";

const useInternet = () => {
  const [internet, setInternet] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => setInternet(true));
    window.addEventListener("offline", () => setInternet(false));
  }, []);
  return internet;
};

export default useInternet;
