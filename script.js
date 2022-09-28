'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function(starterIndex, mainIndex) {
        // We want to return an array
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    }
}

// Destructuring array
const [first, second] = restaurant.categories;
console.log(first, second); //Italian Pizzeria

// Skipping element while destructuring
let [x, , z] = restaurant.starterMenu;
console.log(x, z); //Focaccia, Garlic Bread

// Switching destructured elements
[x, z] = [z, x];
console.log(x, z);

// Return array from function an destruct it
const [appetizer, mainCourse] = restaurant.order(2, 0);
console.log(appetizer, mainCourse); //Garlic Bread, Pizza

//Return value from nested array
const nested = [1, 2, [3, 4]];
const [p, ,[q, r]] = nested;
console.log(p, q, r);

// Setting default values

const [e=1, f=2, g=3] = [8, 9];
// g doesn't have a values so in uses 'its' default value
console.log(e, f, g); //8, 9, 3