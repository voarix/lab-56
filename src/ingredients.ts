import meatImage from './assets/meat.jpg';
import cheeseImage from './assets/cheese.jpg';
import saladImage from './assets/salad.jpg';
import baconImage from './assets/bacon.jpg';

interface Ingredient {
  name: string;
  price: number;
  image: string;
}

const INGREDIENTS : Ingredient[]= [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

export default INGREDIENTS;