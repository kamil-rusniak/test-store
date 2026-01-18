"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext";
import styles from "./ProductCard.module.css";

export function ProductCard({ product, priority = false }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (isAdded) return; // Prevent multiple clicks during transition
    
    addToCart(product);
    setIsAdded(true);
    
    setTimeout(() => {
      setIsAdded(false);
    }, 1500);
  };

  return (
    <div className={styles.productCard}>
      {product.image && (
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          className={styles.productImage}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      )}
      <div className={styles.productInfo}>
        <h3>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart} 
          className={`${styles.addToCartButton} ${isAdded ? styles.added : ''}`}
          disabled={isAdded}
        >
          <span className={styles.buttonText}>{isAdded ? 'Added' : 'Add to Cart'}</span>
        </button>
      </div>
    </div>
  );
}

