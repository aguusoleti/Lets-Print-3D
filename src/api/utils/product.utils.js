import Product from "../models/product.js";
import {findAll as findAllCategories} from "./category.utils.js";
export const findAllAndPopulate = async (filter = {}) => {
  return Product.find(filter).populate("category").populate("subcategory");
};

const CATEGORY_AND_SUBCATEGORY = ['category', 'subcategory']

export const clearObject = (obj) => JSON.parse(JSON.stringify({ ...obj }));

// name: { $regex: name, $options: "i" }

export const buildFilterProductQuery = async (queryParams) => {
  let filter = clearObject(queryParams);
  filter = parseProductFields(filter);
  const subcategoriesIds = []
  const categoriesIds = []
  let result = {};
  for (const attr in filter) {
    if (typeof filter[attr] === "string")
      if (CATEGORY_AND_SUBCATEGORY.includes(attr)){
        await findCategoriesIds({filter, attr, subcategoriesIds, categoriesIds})
      } else result[attr] = { $regex: filter[attr], $options: "i" };
    else if (typeof filter[attr] === "number") result[attr] = filter[attr];
  }
  buildResultForCategories({result, subcategoriesIds, categoriesIds})
  return result;
};

const findCategoriesIds = async ({filter, attr, subcategoriesIds, categoriesIds}) => {
  const categories = await findAllCategories({ name: { $regex: filter[attr], $options: "i" }, type: { $regex: attr, $options: "i"}})
  categories.forEach(category => {
    if (category.type === CATEGORY_AND_SUBCATEGORY[0]) categoriesIds.push(category.id)
    else subcategoriesIds.push(category.id)
  })
}

const buildResultForCategories = ({result, subcategoriesIds, categoriesIds}) => {
  if (subcategoriesIds.length){
    result['subcategory'] = {$in: subcategoriesIds}
  } else if (categoriesIds.length) {
    result['category'] = {$in: categoriesIds}
  }
}

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
