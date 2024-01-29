import RecipeNutritionalFact from './RecipeNutritionalFact';
import { AiOutlineFire } from 'react-icons/ai';
import { CiWheat } from 'react-icons/ci';
import { BiCheese, BiCake } from 'react-icons/bi';
import { IoFishOutline } from 'react-icons/io5';

export default function RecipeHeader({ nutritionalFacts, name }) {
  const nutritionalFactsArray = [
    {
      id: 1,
      amount: nutritionalFacts.calories,
      category: 'calories',
      Icon: AiOutlineFire,
    },
    {
      id: 2,
      amount: nutritionalFacts.carbohydrates,
      category: 'g carbs',
      Icon: CiWheat,
    },
    {
      id: 3,
      amount: nutritionalFacts.fat,
      category: 'g fats',
      Icon: BiCheese,
    },
    {
      id: 4,
      amount: nutritionalFacts.protein,
      category: 'g proteins',
      Icon: IoFishOutline,
    },
    {
      id: 5,
      amount: nutritionalFacts.sugar,
      category: 'g sugar',
      Icon: BiCake,
    },
  ];
  return (
    <div className="recipe-header">
      <h1>{name}</h1>
      <div className="nutritional-facts-container">
        {nutritionalFactsArray.map(({Icon, id, amount, category}) => (
          <RecipeNutritionalFact fact={{amount, category}} key={id}>
            <Icon/>
          </RecipeNutritionalFact>
        ))}
      </div>
    </div>
  );
}
