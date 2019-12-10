import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [response, setResponse] = useState({});

  useEffect(() => {

    axios.get(url)
      .then(response => {
        setResponse(response.data)
      })
      .catch(error =>  {
        console.log(error.message);    
      })
  }, []);

  return [response];
};
