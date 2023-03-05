import Category from "../models/category.js";

export const findAll = async (filter = {}) => {
    return Category.find(filter);
};
