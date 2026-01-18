// API functions for Fake Store API

const API_BASE_URL = 'https://fakestoreapi.com';

export async function getCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    
    const categorySlugs = await response.json();
    
    return categorySlugs.map(slug => ({
      slug,
      name: slug
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

export async function getProductsByCategory(categorySlug) {
  try {
    // URL-encode the category slug for the API endpoint
    const encodedSlug = encodeURIComponent(categorySlug);
    const response = await fetch(`${API_BASE_URL}/products/category/${encodedSlug}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }
    
    const products = await response.json();
    
    return products.map(product => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      category: product.category
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

export async function categoryExists(categorySlug) {
  try {
    const categories = await getCategories();
    return categories.some(cat => cat.slug === categorySlug);
  } catch (error) {
    console.error('Error checking category:', error);
    return false;
  }
}
