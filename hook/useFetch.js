import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const axios = require('axios');

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      'X-RapidAPI-Key': '5719257459msh825e4892384de45p1806c4jsn383e78e52937',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    },
    params: { ...query },
  };
  

  const fetchData = async () => {
    setIsLoading(true);

    try{
      const response = await axios.request(options);

      setData(response.data.data)
    } catch(error) {
      setError(error)
      alert('There is an error:\n'+ JSON.stringify(error))
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true)
    fetchData();
  }

  return { data, isLoading, error, refetch };
} 

export default useFetch;