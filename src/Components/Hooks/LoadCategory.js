import LoadData from "./LoadData";

const LoadCategory = () => {
  const [product] = LoadData();
  const categories = [];
  for (let i = 0; i < product?.length; i++) {
    const categoryi = product[i]?.category;
    if (categories.indexOf(categoryi) === -1) {
      categories.push(categoryi);
    }
  }
  return [categories];
};
export default LoadCategory;
