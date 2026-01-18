import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { getCategories, getProductsByCategory } from "@/app/lib/data";
import { ProductCard } from "@/app/components/ProductCard";

export default async function CategoryPage({ params }) {
  const { slug: encodedSlug } = await params;
  
  const slug = decodeURIComponent(encodedSlug);
  
  let categoryProducts;
  let categoryExists = false;
  
  try {
    const categories = await getCategories();
    categoryExists = categories.some(cat => cat.slug === slug);
    
    if (!categoryExists) {
      notFound();
    }
    
    categoryProducts = await getProductsByCategory(slug);
  } catch (error) {
    return (
      <div className={styles.page}>
        <main className={styles.main}>
          <Link href="/" className={styles.backLink}>
            ← Back to Categories
          </Link>
          <p className={styles.error}>Failed to load products. Please try again later.</p>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Link href="/" className={styles.backLink}>
          ← Back to Categories
        </Link>
        
        <div className={styles.header}>
          <h1 className={styles.categoryTitle}>{slug}</h1>
          <p className={styles.productCount}>
            {categoryProducts.length} {categoryProducts.length === 1 ? 'product' : 'products'}
          </p>
        </div>

        <div className={styles.products}>
          {categoryProducts.length > 0 ? (
            categoryProducts.map((product, index) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                priority={index < 4}
              />
            ))
          ) : (
            <p className={styles.noProducts}>No products found in this category.</p>
          )}
        </div>
      </main>
    </div>
  );
}
