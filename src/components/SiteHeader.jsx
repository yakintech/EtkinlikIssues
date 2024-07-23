import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SiteHeader() {

    const [categories, setcategories] = useState([])

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/categories")
            .then(res => res.json())
            .then(data => setcategories(data))

    }, [])


    return <>
        <div style={{display:"flex", justifyContent: "space-between" }}>
            <Link to="/"> <h3>Logo</h3></Link>
            <ul style={{ display: 'flex', justifyContent: "space-between" }}>
                {
                    categories.map(category => <li style={{marginLeft:20}} key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>)
                }
            </ul>
            <input type="text" placeholder="Search" />
        </div>
    </>
}

export default SiteHeader