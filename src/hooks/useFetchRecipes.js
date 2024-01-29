import axios from "axios";
import {useState } from "react";

const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '40',
    },
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };
  

  
    
const useFetchRecipes = () => {
    const [recipes, setRecipies] = useState(null);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
  
    

    const fetchRecipes = async (searchTerm) => {
        setLoading(true)
        setRecipies(null)
        setError(null)
      try {
        const reqOptions = {...options}
        if(searchTerm){
            reqOptions.params.q = searchTerm
        }
        const response = await axios.request(options);
        setRecipies(response.data.results)
        setLoading(false)
        
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    };

    return [fetchRecipes, {data: recipes, loading, error}]
}

export default useFetchRecipes