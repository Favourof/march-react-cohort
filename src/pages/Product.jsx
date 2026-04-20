import React, { useEffect, useState } from 'react'

export const Product = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorStatus, setErrorStatus] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true)
            try {
                const pro = await fetch('https://fakestoreapi.com/products')
                const res = await pro.json()

                if (res.length >= 1) {
                    setProduct(res)
                    console.log(res, 'our product');
                }
            } catch (error) {
                console.log(error);
                setErrorStatus(error.message)

            } finally {
                setLoading(false)
            }

        }
        getProduct()
    }, [])

    return (
        <div>
            <h1>Product</h1>
            {loading && <p>loading ......</p>}
            {errorStatus && <p>Error occur while fetching Product</p>}
            {
                product.length >= 1 && <div>
                    {product.map((prod, i) => (
                        <ul key={i}>
                            <li>{prod.title}</li>
                            <li>{prod.description}</li>
                            <li>{prod.price}</li>
                            <li><img src={prod.image} width={"100px"} height={"100px"} alt={prod.title} /></li>
                            {/* <li>{prod.rating.}</li> */}
                        </ul>
                    ))}
                </div>
            }
        </div>
    )
}
