// const paginate = followers => {
//   const itemsPerPage = 12;
//   // 5 100    100 / 12 = 4
//   const numberOfPages = Math.ceil(followers.length / itemsPerPage);

//   const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
//     const start = index * itemsPerPage;
//     // 1 ......    4
//     return followers.slice(start, start + itemsPerPage);
//   });

//   return newFollowers;
// };

// export default paginate;

const paginate = followers => {
  const itemsParPage = 12;

  const numberOfPage = Math.ceil(followers.length / itemsParPage);

  const newFollowers = Array.from({ length: numberOfPage }, (_, index) => {
    const start = index * itemsParPage;

    return followers.slice(start, start + itemsParPage);
  });
  return newFollowers;
};

export default paginate;
