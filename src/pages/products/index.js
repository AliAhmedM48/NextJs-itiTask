import ProdcutsComponent from '@/components/ProdcutsComponent';
import ProductsCard from '@/components/ProductsCardComponent';
import React from 'react';

const index = ({ products }) => {
    return <ProdcutsComponent {...products} />;
};

export default index;

export async function getStaticProps() {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return {
        props: {
            products: data
        }
    }
}