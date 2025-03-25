import { Router } from "express";
import { getAllProducts, getProductById } from "../controller/products.controller.js";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:id", getProductById);

export default productsRouter;
