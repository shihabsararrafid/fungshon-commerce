import LoadData from "./LoadData";

const LoadPopularProducts = () => {
  const [products] = LoadData();
  let n = products?.length;
  let popular = [];
  for (let i = 0; i < 2; i++) {
    popular[i] = [];
  }
  for (let i = 0; i < 2; i++) {
    if (i === 0) {
      for (let j = 0; j < products?.length; j++) {
        popular[i][j] = products[j]?.id;
      }
    } else if (i === 1) {
      for (let j = 0; j < products?.length; j++) {
        // console.log(products[j]?.rating?.rate);
        popular[i][j] = products[j]?.rating?.rate;
      }
    }
  }

  // for (let j = 0; j < products?.length; j++) {
  //   // console.log(products[j]?.rating?.rate);
  //   console.log(popular[0][j], popular[1][j]);
  // }

  //
  //popular[0].sort();
  for (let k = 0; k < n - 1; k++) {
    for (let j = 0; j < n - k - 1; j++) {
      // console.log("hi");
      if (popular[1][j] < popular[1][j + 1]) {
        // console.log("big");
        let tmp = popular[1][j];
        popular[1][j] = popular[1][j + 1];
        popular[1][j + 1] = tmp;
        tmp = popular[0][j];
        popular[0][j] = popular[0][j + 1];
        popular[0][j + 1] = tmp;
      }
    }
  }
  // for (let j = 0; j < 4; j++) {
  //   console.log(popular[0][j]);
  // }
  return [popular[0]];
};
export default LoadPopularProducts;
