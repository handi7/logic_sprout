function findDisapperared(array) {
  const disappeared = [];

  for (let i = 1; i <= array.length && i <= 105; i++) {
    if (!array.includes(i)) {
      disappeared.push(i);
    }
  }

  return disappeared;
}

const array = [4, 3, 2, 7, 8, 2, 3, 1];

const result = findDisapperared(array);

console.log(result);
