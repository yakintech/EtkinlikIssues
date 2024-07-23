
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function CategoryPage() {

    const [products, setproducts] = useState([])

    const { categoryId } = useParams()



    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => {
                let filteredData = data.filter(product => product.categoryId == categoryId)
                setproducts(filteredData)
            })

    }, [categoryId])

    return <>
        <h1 style={{ textAlign: 'center' }}>Activities</h1>
        <hr />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                products.map(product => <Link to={`/${product.id}`}>
                    <div key={product.id} style={{ border: "1px solid", margin: 10, padding: 10, width: 100, height: 100 }}>
                        <h3>{product.name}</h3>
                        <p>{product.unitPrice}</p>
                    </div>
                </Link>)
            }
        </div>
    </>
}

export default CategoryPage