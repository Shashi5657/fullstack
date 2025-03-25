import { DB_URI } from "../config/env.js";
import Products from "../models/product.model.js";
import mongoose from "mongoose";

const mockProducts = [
  {
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 99.99,
    category: "Electronics",
    image: "https://example.com/headphones.jpg",
  },
  {
    name: "Smartphone",
    description: "Latest model smartphone with 128GB storage.",
    price: 699.99,
    category: "Electronics",
    image: "https://example.com/smartphone.jpg",
  },
  {
    name: "Laptop",
    description: "Powerful laptop with 16GB RAM and 512GB SSD.",
    price: 1299.99,
    category: "Computers",
    image: "https://example.com/laptop.jpg",
  },
  {
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with RGB lighting.",
    price: 49.99,
    category: "Accessories",
    image: "https://example.com/mouse.jpg",
  },
  {
    name: "Mechanical Keyboard",
    description: "Mechanical keyboard with customizable RGB keys.",
    price: 79.99,
    category: "Accessories",
    image: "https://example.com/keyboard.jpg",
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass.",
    price: 59.99,
    category: "Audio",
    image: "https://example.com/speaker.jpg",
  },
  {
    name: "Smart Watch",
    description: "Feature-rich smartwatch with health tracking.",
    price: 199.99,
    category: "Wearables",
    image: "https://example.com/smartwatch.jpg",
  },
  {
    name: "4K TV",
    description: "55-inch 4K Ultra HD Smart TV.",
    price: 899.99,
    category: "Electronics",
    image: "https://example.com/tv.jpg",
  },
  {
    name: "DSLR Camera",
    description: "Professional DSLR camera with 24MP sensor.",
    price: 799.99,
    category: "Cameras",
    image: "https://example.com/camera.jpg",
  },
  {
    name: "External Hard Drive",
    description: "2TB external hard drive for storage expansion.",
    price: 89.99,
    category: "Storage",
    image: "https://example.com/harddrive.jpg",
  },
];

export const seedDataBase = async () => {
  console.log("DB_URI:", DB_URI); // Debugging
  try {
    await mongoose.connect(DB_URI);
    await Products.deleteMany();
    await Products.insertMany(mockProducts);
    console.log("Mock data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
};

seedDataBase();
