import React from 'react';
import ProductRow from './ProductRow';

export default function ProductsTable(props){
    const {products} = props

    return(
        <table>
            <thead>
                <tr>Name</tr>
                <tr>Price</tr>
            </thead>
            <tbody>
                {products.map(elem => {
                    return <ProductRow key={elem.id} products={elem} />
                })}
            </tbody>
        </table>
    )
}