// app/products/page.tsx (Server Component)
import ProductList from '@/Components/ProductList';

async function fetchProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  return data.products; // Assuming data.products holds an array of products
}

export default async function Page() {
  const products = await fetchProducts();

  return <ProductList products={products} />;
}
