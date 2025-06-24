import React from "react";
import ProductCard from "../../components/ProductCard";

const VendorAds = () => {
  const dummyItems = [
    {
      id: 1,
      title: "Classic White T-Shirt",
      description: "A comfortable cotton t-shirt perfect for everyday wear.",
      price: 25.99,
      category: "clothes",
      image: "https://www.baroneclothing.com/media/catalog/product/cache/22ce4385af9badfd51b483d5c1445f7f/j/2/j215m.jpg",
    },
    {
      id: 2,
      title: "Men's Running Sneakers",
      description: "Breathable and lightweight sneakers designed for running.",
      price: 59.99,
      category: "shoes",
      image: "https://redtape.com/cdn/shop/files/RSO4034_1_40cd841c-11dc-4c78-ab85-bfad034e31fe.jpg?v=1750066085",
    },
    {
      id: 3,
      title: "Floral Summer Dress",
      description:
        "Lightweight dress perfect for hot summer days and casual outings.",
      price: 45.0,
      category: "clothes",
      image: "https://www.teutamatoshi.com/cdn/shop/files/C65DC109-604F-4BC0-92D0-145EC867FA15.jpg?v=1718271253",
    },
    {
      id: 4,
      title: "Leather Boots",
      description:
        "Durable leather boots suitable for both fashion and function.",
      price: 89.99,
      category: "shoes",
      image: "https://i.etsystatic.com/11657093/r/il/31dc65/3766454712/il_570xN.3766454712_jx6t.jpg",
    },
    {
      id: 5,
      title: "Ocean Breeze Perfume",
      description:
        "A refreshing scent inspired by the sea breeze and citrus notes.",
      price: 39.99,
      category: "perfumes",
      image: "https://valenciaperfumes.com/cdn/shop/files/EE841D03-FC5D-4735-BB6F-2611F2C15F04.png?v=1718145400",
    },
    {
      id: 6,
      title: "Elegant Evening Gown",
      description:
        "Perfect for formal events, this gown blends grace and style.",
      price: 120.0,
      category: "clothes",
      image: "https://www.newyorkdress.com/cdn/shop/products/LaDivine-CD868_greenary_600x.jpg?v=1745422889",
    },
    {
      id: 7,
      title: "High Heels",
      description:
        "Stylish high heels suitable for formal and semi-formal wear.",
      price: 70.0,
      category: "shoes",
      image: "https://gh.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/1570061/1.jpg?5775",
    },
    {
      id: 8,
      title: "Luxury Musk Perfume",
      description: "A rich and long-lasting musk-based fragrance.",
      price: 55.99,
      category: "perfumes",
      image: "https://themuskcompany.com/cdn/shop/collections/D3A2831s-compressed_1200x1487.jpg?v=1652557096",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-4">
      {dummyItems.map((item) => (
        <ProductCard key={item.id} ad={item} />
      ))}
    </div>
  );
};

export default VendorAds;
