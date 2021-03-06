import { useState } from "react";
import axios from "axios";

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);
  const flip = () => {
    setFlipped((isUp) => !isUp);
  };
  return [isFlipped, flip];
}
function useAxios(baseUrl) {
  const [responses, setResponses] = useState([]);

  const addResponseData = async (
    formatter = (data) => data,
    restOfUrl = ""
  ) => {
    console.log(formatter);
    const response = await axios.get(`${baseUrl}${restOfUrl}`);
    setResponses((data) => [...data, formatter(response.data)]);
  };
  const clearResponses = () => setResponses([]);

  return [responses, addResponseData, clearResponses];
}

export { useFlip, useAxios };
