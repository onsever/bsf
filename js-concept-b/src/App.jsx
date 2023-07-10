import React from "react";
import "./App.css";

export default function App() {
    const products = [
        { name: "Armour", price: 3.99, quantity: 2 },
        { name: "Sword", price: 4.99, quantity: 1 },
        { name: "Shield", price: 7.99, quantity: 3 },
    ];

    const calculateTotalPrice = (product) => {
        return product.price * product.quantity;
    }

    const printProductInfo = (product) => {
        console.log(`Product: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}, Total Price: ${calculateTotalPrice(product)}`);
    }

    products.forEach(printProductInfo);

    return (
        <div className="container">
            <h1>Products List</h1>
            <div className="line" />
            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.name}>
                        <div className="product-name">{product.name}</div>
                        <div className="product-quantity">Quantity: {product.quantity}</div>
                        <div className="product-price">Price: ${product.price}</div>
                        <div className="product-tp">${calculateTotalPrice(product)}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
