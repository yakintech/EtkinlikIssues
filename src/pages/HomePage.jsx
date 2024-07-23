import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HomePage() {

    const [products, setproducts] = useState([])


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then(data => setproducts(data))

    }, [])

    return <>
        <h1 style={{textAlign:'center'}}>Activities</h1>
        <hr />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {
                products.map(product =><Link to={`/activity/${product.id}`}> <div key={product.id} style={{ border: "1px solid", margin: 10, padding: 10, width: 100, height: 100 }}>
                    <h3>{product.name}</h3>
                    <p>{product.unitPrice}</p>
                </div></Link>)
            }
        </div>
    </>
}

export default HomePage