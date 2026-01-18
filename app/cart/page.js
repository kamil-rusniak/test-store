"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/app/contexts/CartContext";
import styles from "./page.module.css";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, isLoaded } = useCart();

  if (!isLoaded) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <p>Loading...</p>
        </main>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Link href="/" className={styles.backLink}>
            ← Back to Store
          </Link>
          <div className={styles.emptyCart}>
            <h1>Your cart is empty</h1>
            <p>Add some products to your cart to get started.</p>
            <Link href="/" className={styles.shopButton}>
              Continue Shopping
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const total = getCartTotal();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.backLink}>
          ← Back to Store
        </Link>
        
        <div className={styles.header}>
          <h1>Shopping Cart</h1>
          <p className={styles.itemCount}>
            {cart.length} {cart.length === 1 ? 'item' : 'items'}
          </p>
        </div>

        <div className={styles.cartContent}>
          <div className={styles.cartItems}>
            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={120}
                    height={120}
                    className={styles.itemImage}
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, 120px"
                  />
                )}
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemPrice}>${item.price.toFixed(2)}</p>
                  <div className={styles.itemControls}>
                    <div className={styles.quantityControl}>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className={styles.quantityButton}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className={styles.quantityButton}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeButton}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                  <p className={styles.itemTotal}>
                    Total: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className={styles.summaryDivider} />
            <div className={`${styles.summaryRow} ${styles.totalRow}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button disabled className={styles.checkoutButton}>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

