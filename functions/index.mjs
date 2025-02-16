import * as functions from "firebase-functions";
import admin from "firebase-admin";
import express from "express";
import cors from "cors";


admin.initializeApp();
const app = express();

app.use(cors({ origin: true }));

const flowersAndHoney = [
  {
    id: 1,
    name: "Rose Bouquet",
    price: 25.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/pink-roses.webp?alt=media&token=0260a3a3-7896-4444-a126-785b7d9a36fb",
    description:
      "A beautiful bouquet of fresh pink roses, perfect for any occasion.",
    origin: "France",
    color: "Pink",
    category: "Flowers",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Tulip Delight",
    price: 19.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/tulip-roses.webp?alt=media&token=a976864b-39aa-4904-9222-d088157fdef7",
    description: "Bright and colorful tulips to bring joy to your day.",
    origin: "Netherlands",
    color: "Mixed",
    category: "Flowers",
    availability: "Limited Stock",
  },
  {
    id: 3,
    name: "Sunflower Charm",
    price: 22.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/sunflower-roses.webp?alt=media&token=69b9cbeb-49f6-45f8-9600-a217e9c67db6",
    description: "Sunflowers that bring warmth and positivity to any space.",
    origin: "USA",
    color: "Yellow",
    category: "Flowers",
    availability: "Out of Stock",
  },
  {
    id: 4,
    name: "Orchid Elegance",
    price: 29.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/orchid-roses.webp?alt=media&token=b47bc34d-63b1-4e8a-8926-4259da0ad805",
    description: "Elegant orchids, symbolizing beauty and sophistication.",
    origin: "Thailand",
    color: "Purple",
    category: "Flowers",
    availability: "In Stock",
  },
  {
    id: 5,
    name: "Valentine's Bouquet",
    price: 18.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/valentine-roses.webp?alt=media&token=b3422bd6-9f00-4fce-8ee1-9d1b29c1f2f7",
    description: "A romantic arrangement of red roses for your loved one.",
    origin: "Ecuador",
    color: "Red",
    category: "Flowers",
    availability: "In Stock",
  },
  {
    id: 6,
    name: "Flamingo Love",
    price: 24.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/flamengo-roses.webp?alt=media&token=ea5aa001-fc20-4396-a37c-c44ddd323d6b",
    description: "A unique blend of pink and white roses for a special gift.",
    origin: "Colombia",
    color: "Pink & White",
    category: "Flowers",
    availability: "Limited Stock",
  },
  {
    id: 7,
    name: "Lili Dream",
    price: 26.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/lilis-roses.webp?alt=media&token=061996cc-77ef-4423-881d-a4aa9d4f7f56",
    description: "A bouquet of fragrant lilies to brighten up your day.",
    origin: "Japan",
    color: "White",
    category: "Flowers",
    availability: "In Stock",
  },
  {
    id: 8,
    name: "Manuka Honey",
    price: 40.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/manuka-honey.webp?alt=media&token=70fb3b83-28bb-4a3f-99a0-c230a774f4c8",
    description: "Pure Manuka honey, known for its powerful health benefits.",
    origin: "New Zealand",
    flavor: "Rich & Earthy",
    category: "Honey",
    availability: "In Stock",
  },
  {
    id: 9,
    name: "Orange Blossom Honey",
    price: 21.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/orangeblossom-honey.jpeg?alt=media&token=815cfa5c-e8bc-4807-8c71-4af96f4d0966",
    description: "Sweet honey with a hint of citrus from orange blossoms.",
    origin: "Spain",
    flavor: "Citrusy & Floral",
    category: "Honey",
    availability: "Limited Stock",
  },
  {
    id: 10,
    name: "Wild Flowers Honey",
    price: 27.99,
    image:
      "https://firebasestorage.googleapis.com/v0/b/worood-flower-shop.firebasestorage.app/o/wildflowers-honey.webp?alt=media&token=fdc60b1e-8f80-43dc-8537-7d222f064c65",
    description:
      "Raw honey sourced from wildflowers, rich in natural goodness.",
    origin: "USA",
    flavor: "Floral & Sweet",
    category: "Honey",
    availability: "In Stock",
  },
];

export const getProducts = functions.https.onRequest((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(flowersAndHoney);
});

export const getProductById = functions.https.onRequest((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  const id = parseInt(req.query.id);
  const product = flowersAndHoney.find((item) => item.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.setHeader("Content-Type", "application/json");
  res.json(product);
});