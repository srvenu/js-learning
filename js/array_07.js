// Array

const arr =[1,2,3,4,5,6,7,8,"Apple","Ball","Cat"]

// console.log(arr[9]);

// Shallow copy
// Deep Copy

const myHeros =["Ironman","Scralet","Winter","Hulk"]

// console.log(myHeros.length);
// console.log(myHeros.push("Antman","Batman"));
// console.log(myHeros.pop());
// console.log(myHeros.unshift("Rocket"));
// console.log(myHeros.shift());
// console.log(myHeros.includes("Ironman"));
// console.log(myHeros.indexOf("Ironman"));
// console.log(myHeros.reverse());
// console.log(myHeros);
// console.log(myHeros.slice(0,3));
// console.log(myHeros);

// console.log(myHeros)
// console.log(myHeros.splice(0,3));
// console.log(myHeros)

const marvel_hero = ["Ironman","Thor","Spiderman"];

const dc_heros = ["superman","Flash","Batman"];

// marvel_hero.push(dc_heros);

// console.log(marvel_hero);

// let all_heros = marvel_hero.concat(dc_heros);
// console.log(all_heros);

const allNewHeros = [...marvel_hero, ...dc_heros];
// console.log(allNewHeros);

const newArr = [1,2,3,[4,5,6],7,[8,9,[12,11]]];

const realNewArr = newArr.flat(Infinity);
// console.log(realNewArr);





