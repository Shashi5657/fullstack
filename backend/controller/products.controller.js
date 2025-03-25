import Products from "../models/product.model.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.find();

    res.status(200).json({ success: true, data: products });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res
        .status(400)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    next(error);
  }
};
