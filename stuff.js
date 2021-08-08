const recommend = require("collaborative-filter");

const itemsArray = ["Mexican", "Chinese", "Indian"];

const usersArray = ["Saptarshi", "Deep", "Dipankar"];

// the rows are the users and the columns are the items and whether they like it or not
const ratings = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 0, 0],
];

//const result = recommend.cFilter(ratings, 2);

usersArray.map((el, index) => {
  const result = recommend.cFilter(ratings, index);

  if (result.length > 0)
    console.log(`For ${el}, the best item would be : ${itemsArray[result[0]]}`);
  console.log(result);
});
//console.log(result);
