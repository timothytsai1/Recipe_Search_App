import axios from 'axios';
import {useReducer } from 'react';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/get-more-info',
  params: { id: '8138' },
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const Action ={
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
}

const reducer = (_, action) => {
  switch(action.type){
    case Action.FETCHING_DATA:
      return {
        data: null,
        error: null,
        loading: true
      }
    case Action.FETCH_SUCCESSFUL:
      return {
        data: action.payload,
        error: null,
        loading: false
      }
    case Action.FETCH_ERROR:
      return {
        data: null,
        error: action.payload,
        loading: false
      }
    default:
      return initialState
  }
}

const useFetchRecipe = () => {


  const [{data, loading, error}, dispatch] = useReducer(reducer, initialState);



  const fetchRecipe = async (id) => {


    dispatch({type: Action.FETCHING_DATA})
    try {
      const reqOptions = { ...options };

      reqOptions.params.id = id;

      const response = await axios.request(options);


      dispatch({type: Action.FETCH_SUCCESSFUL, payload: response.data})

    } catch (err) {


      dispatch({type: Action.FETCH_ERROR, payload: err.message})
    }
  };

  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe;
