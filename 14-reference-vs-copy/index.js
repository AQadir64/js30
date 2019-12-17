// start with strings, numbers and booleans

let char = "a";

let char2 = char;
console.log(char2, char);

char2 = "b";

console.log(char2, char);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];
// and we want to make a copy of it.
// You might think we can just do something like this:

const player2 = players;

console.log(players, player2);

// however what happens when we update that array?

player2[3] = "hello";

// now here is the problem!

console.log(players, player2);

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

const player5 = players.slice();

// one way

const player6 = Array.from(players);

// or create a new array and concat the old one in

const player4 = [].concat(players);

// or use the new ES6 Spread

const player3 = [...players];

// now when we update it, the original one isn't changed

player3[3] = "change";
console.log(players, player3);

player4[3] = "change";
console.log(players, player4);

player5[3] = "change";
console.log(players, player5);

player6[3] = "change";
console.log(players, player6);

// The same thing goes for objects, let's say we have a person object

// with Objects

const person = {
  name: "Wes Bos",
  age: 80
};

// and think we make a copy:

// how do we take a copy instead?

const cap1 = Object.assign({}, person, { number: 100 });

cap1.number = 100;

console.log(cap1, person);

// We will hopefully soon see the object ...spread

// not introduce till now

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const user = {
  name: "name",
  age: 0,
  social: {
    facebook: "username",
    twitter: "@hello"
  }
};

const per1 = Object.assign({},user);

per1.name = "abdulqadir";

console.log(per1, user);

per1.social.twitter ="@coolman"

console.log(per1, user);

const per2 = JSON.parse(JSON.stringify(user))

per1.social.twitter ="@ayin-qoph"

console.log(per2, user);


