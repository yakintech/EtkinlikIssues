import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function ActivityDetail() {

  const {etkinlikId} = useParams()

  const [product, setproduct] = useState({})


  useEffect(() => {
    
    fetch(`https://northwind.vercel.app/api/products/${etkinlikId}`)
        .then(res => res.json())
        .then(data => setproduct(data))

  }, [])
  

  return <>
    <h1 style={{textAlign:'center'}}>Activity Detail</h1>
    <hr />
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div key={product.id} style={{ border: "1px solid", margin: 10, padding: 10, width: 300, height: 300 }}>
            <h3>Name: {product.name}</h3>
            <p>Unit Price: {product.unitPrice}</p>
            <p>Quantity Per Unit: {product.quantityPerUnit}</p>
            <p>Stock: {product.unitsInStock}</p>
        </div>
    </div>
  </>
}

export default ActivityDetail