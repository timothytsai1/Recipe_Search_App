import Card from './Card';

// export const recipes = [
//   {
//     id: 1,
//     name: 'Poke Bowls',
//     image:
//       'https://ww2.kqed.org/app/uploads/sites/24/2016/07/PokiBowlAhiSalmon.jpg',
//     tag: 'Healthy Dinner',
//     numberOfMinutes: 60,
//   },

//   {
//     id: 2,
//     name: 'Chocolate Banana Cake',
//     image:
//       'https://www.shelovesbiscotti.com/wp-content/uploads/2016/01/Chocolate-Banana-Cake-Recipe-1.jpg',
//     tag: 'Dessert',
//     numberOfMinutes: 150,
//   },

//   {
//     id: 3,
//     name: 'Shawarma',
//     image:
//       'https://foxeslovelemons.com/wp-content/uploads/2023/06/Chicken-Shawarma-8-735x735.jpg',
//     tag: 'Healthy Dinner',
//     numberOfMinutes: 70,
//   },

//   {
//     id: 4,
//     name: 'Loaded Potatoes',
//     image:
//       'https://www.spendwithpennies.com/wp-content/uploads/2022/10/1200-Loaded-Baked-Potatoes-SpendWithPennies.jpg',
//     tag: 'Healthy Dinner',
//     numberOfMinutes: 40,
//   },
// ];

export default function CardList({recipes}) {
  return (
    <section className="cards">
      {recipes.map((recipe) => (
        <Card key={recipe.id} recipe={recipe}/>
      ))}
    </section>
  );
}
