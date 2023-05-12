import { useState,useEffect } from "react";
import axios from "axios";
// import {RAPID_API_KEY} from 'env';

// const rapidApiKey=RAPID_API_KEY;

const useFetch=(endpoint,query)=>{
    const [data,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': 'f333bda633mshc391a754fe9c69ap1baaddjsn4a68677584e1',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {
            ...query
          }
      };

      const fetchData=async ()=>{
        setIsLoading(true);

        try {
           const response=await axios.request(options);
           setData(response.data.data);
           setIsLoading(false); 
        } catch (error) {
           setError(error);
           alert('There is an Error') 
        }finally{
           setIsLoading(false);
        }
      }

      useEffect(()=>{
        fetchData();
      },[]);

      const reFetch=()=>{
        setIsLoading(true);
        fetchData();
      }

      return {data,isLoading,error,reFetch};
}

export default useFetch;