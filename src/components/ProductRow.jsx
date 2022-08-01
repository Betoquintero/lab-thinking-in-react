import React from 'react'

export default function ProductsRow(props){
    const {products: {price,inStock,name}} = props;
    return(
        <div>
            <tr>
                <td>
                    {inStock ? <p>{name}</p> : <p style={{"color":"red"}}>{name}</p>}
                </td>
                <td className = 'price'>
                    {price}
                </td>
            </tr>
        </div>
    )
}