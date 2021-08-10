const recommend = require("collaborative-filter");

const itemsArray = ["Mexican", "Chinese", "Indian", "Continental"];

const usersArray = ["Customer 1", "Customer 2", "Customer 3"];

// the rows are the users and the columns are the items and whether they like it or not
const ratings = [
  [1, 1, 1, 0],
  [1, 0, 1, 1],
  [1, 0, 0, 1],
];

//const result = recommend.cFilter(ratings, 2);

usersArray.map((el, index) => {
  const result = recommend.cFilter(ratings, index);
  console.log(`For ${el},`);
  if (result.length > 0)
    result.map((val) => console.log(` ${itemsArray[val]}`));

  // console.log(result);
});
//console.log(result);
