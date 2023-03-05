import Product from "../models/product.js";
export const findAllAndPopulate = async (filter = {}) => {
  return Product.find(filter).populate("category").populate("subcategory");
};

export const clearObject = (obj) => JSON.parse(JSON.stringify({ ...obj }));

// name: { $regex: name, $options: "i" }

export const buildFilterProductQuery = (queryParams) => {
  let filter = clearObject(queryParams);
  filter = parseProductFields(filter);
  let result = {};
console.log(filter)
  for (const attr in filter) {
    if (typeof attr === "string")
      result[attr] = { $regex: filter[attr], $options: "i" };
    else if (typeof attr === "number") result[attr] = filter[attr];
  }
  return result;
};

export const parseProductFields = (partialProduct) => {
  const obj = {};
  const path = Product.schema.paths;

  for (const key in partialProduct) {
    if (key in path) {
      let value = partialProduct[key];
      if (path[key].instance === "Number") value = parseInt(value);
      obj[key] = value;
    }
  }
  return obj;
};
