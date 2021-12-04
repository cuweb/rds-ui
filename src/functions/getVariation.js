const getVariation = (type, variations) =>
  variations.find((item) => item.type === type);
export default getVariation;
