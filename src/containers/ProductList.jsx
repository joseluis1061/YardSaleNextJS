import React from 'react';
import {ProductItem} from '@components/ProductItem';
import { useGetProduct } from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

export const ProductList = () => {
	const products = useGetProduct(API);
  return (
    <section className="main-container">
			<div className="ProductList">
				{products.map((product)=>					
					<ProductItem 
						key = {product.id}
						product = {product}
					/>
				)}
			</div>
		</section>
	);
}
