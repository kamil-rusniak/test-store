import Link from "next/link";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              Test Store
            </Link>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus earum fuga aut nisi inventore fugiat veniam eligendi totam, enim.
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Shop</h4>
            <ul className={styles.list}>
              <li><Link href="#">All Products</Link></li>
              <li><Link href="#">New Arrivals</Link></li>
              <li><Link href="#">Best Sellers</Link></li>
              <li><Link href="#">Sale</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Support</h4>
            <ul className={styles.list}>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Shipping</Link></li>
              <li><Link href="#">Returns</Link></li>
              <li><Link href="#">FAQ</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.heading}>Company</h4>
            <ul className={styles.list}>
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Careers</Link></li>
              <li><Link href="#">Press</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>© 2026 Test Store. All rights reserved.</p>
          <div className={styles.links}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
