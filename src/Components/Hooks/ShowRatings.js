const ShowRatings = (rating) => {
  const rem = rating % 1;
  const star1 = Math.floor(rating);
  let star2;
  let fullStar = [];
  let halfStar = [];
  let nullstar = [];
  let star3;
  if (rem !== 0) {
    star2 = 1;
  }
  if (star1 + star2 < 5) star3 = 5 - star1 - star2;
  for (let i = 0; i < star1; i++) {
    fullStar.push(i);
  }
  for (let i = 0; i < star2; i++) {
    halfStar.push(i);
  }
  for (let i = 0; i < star3; i++) {
    nullstar.push(i);
  }

  return [fullStar, halfStar, nullstar];
};
export default ShowRatings;
