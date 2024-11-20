import Product from '@/Components/Product';
import React from 'react'

export default async function page({ params, }: { params: Promise<{ product: number }> }) {

    const id = (await params).product

    const fetchProduct = async (id_product: number) => {
        const response = await fetch(`https://dummyjson.com/products/${id_product}`);
        const data = await response.json();
        return data;
    };   

    const product = await fetchProduct(id);

  return (
    <div>
        <Product product={product} />
    </div>
  )
}
