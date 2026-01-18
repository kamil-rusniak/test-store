import Link from "next/link";
import styles from "./CategoryGrid.module.css";
import { getCategories, getProductsByCategory } from "@/app/lib/data";

export async function CategoryGrid() {
  let categories;
  
  try {
    categories = await getCategories();
    
    const categoriesList = await Promise.all(
      categories.map(async (category) => {
        try {
          const products = await getProductsByCategory(category.slug);
          return { ...category, productCount: products.length };
        } catch {
          return { ...category, productCount: 0 };
        }
      })
    );
    
    return (
      <section id="categories" className={styles.categoriesSection}>
        <div className={styles.categoriesContainer}>
          <div className={styles.categoriesHeader}>
            <p>Browse by Category</p>
          </div>
          <div className={styles.categoriesGrid}>
            {categoriesList.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${encodeURIComponent(category.slug)}`}
                className={styles.categoryCard}
              >
                <div className={styles.categoryImageWrapper}>
                  <div className={styles.categoryImagePlaceholder}>
                    <span>{category.name.charAt(0)}</span>
                  </div>
                </div>
                <div className={styles.categoryOverlay} />
                <div className={styles.categoryContent}>
                  <p className={styles.categoryCount}>
                    {category.productCount} {category.productCount === 1 ? 'product' : 'products'}
                  </p>
                  <h3 className={styles.categoryName}>{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    return null;
  }
}
