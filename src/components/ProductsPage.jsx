import React, {useState} from 'react';
import jsonData from  '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


export default function ProductsPage() {
    const [products, setProducts] = useState(jsonData)

    const handleSearch = (searchValue) =>{
        if (searchValue===''){
            setProducts(jsonData)
        }else{
            const filtered = products.filter(elem => elem.name.toLowerCase().includes((searchValue).toLowerCase()))
            setProducts(filtered)
        }
    }
        const handleStock = (e) => {
            let isChecked = e.target.value;
        if (isChecked){
            const filteredStock = products.filter(elem=>elem.inStock)
            setProducts(filteredStock)
        }else{
            setProducts(jsonData)
        }

    }

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar onSearch= {handleSearch} />
                <p><input type="checkbox" onChange={handleStock} />Only show products in stock</p>
            <ProductTable products={products}/>
           
        </div>
    )


}

