"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/app/contexts/CartContext";
import styles from "./Header.module.css";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount, isLoaded } = useCart();
  const cartCount = isLoaded ? getCartCount() : 0;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Mobile menu button */}
          <button 
            className={styles.mobileMenuButton} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <Link href="/" className={styles.navLink}>Link 1</Link>
            <Link href="/" className={styles.navLink}>Link 2</Link>
            <Link href="/" className={styles.navLink}>Link 3</Link>
          </nav>

          {/* Logo */}
          <Link href="/" className={styles.logo}>
            Test Store
          </Link>

          {/* Cart button */}
          <div className={styles.actions}>
            <Link href="/cart" className={`${styles.iconButton} ${styles.cartButton}`} aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24px" height="24px" viewBox="0 0 24 24">
                <path d="M18 7h-3V6a3 3 0 0 0-6 0v1H6a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-7-1a1 1 0 0 1 2 0v1h-2V6zm6 13H7V9h2v1.5a1 1 0 0 0 2 0V9h2v1.5a1 1 0 0 0 2 0V9h2v10z"/>
              </svg>
              {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <Link href="#" className={styles.navLink}>Shop</Link>
            <Link href="#" className={styles.navLink}>Explore</Link>
            <Link href="#" className={styles.navLink}>About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
