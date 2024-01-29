import { useParams } from 'react-router-dom';
import useFetchRecipe from '../hooks/useFetchRecipe';
import { useEffect } from 'react';
import RecipeHeader from '../components/RecipeHeader';
import Loading from '../components/Loading';
import RecipeInfo from '../components/RecipeInfo';
// import { recipes } from '../components/CardList';

export default function RecipePage() {
  const { id } = useParams();

  const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchRecipe(id);
  }, []);
  

  if(loading) return <Loading/>
  if (error) return <h1>{error}</h1>
  return <div>
    {data && <>
    
    <RecipeHeader nutritionalFacts ={data.nutrition} name={data.name}/>
    <RecipeInfo instructions={data.instructions} image={data.thumbnail_url}/>
    
    </>}
    </div>;
}
