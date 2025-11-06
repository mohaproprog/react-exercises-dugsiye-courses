import React, { useState } from 'react'

function Cart() {
    const [products,setProducts] = useState([]);
    const [productName,setProductName] = useState("");
    const [productPrice,setProductPrice] = useState("");
    // addproduct
    const AddProduct = ()=>{
        if(productName.trim() !== "" && productPrice.trim() !== ""){
            const newProduct ={
            id: crypto.randomUUID(),
            name: productName,
            price: parseFloat(productPrice),
            quantity:1

        }
        setProducts([...products,newProduct]);
        setProductName("");
        setProductPrice("");
        }

    }
    // remove peoduct
    const removeProduct =(id)=>{
        const updatedProduct = products.filter(product=> product.id !== id)
        setProducts(updatedProduct)

    }

    // addedQuantity
    const increseQuantity=(id)=>{
        const updatedQuantity = products.map(product=>(
            product.id === id? {...product, quantity: product.quantity +1}: product
        )
    )
    setProducts(updatedQuantity)
       
    }


    // descrese quantity
    const decreaseQuantity=(id)=>{
        const updatedQuantity = products.map(product=>(
            product.id === id && product.quantity >1 ? {...product, quantity: product.quantity -1} : product
        ))
        setProducts(updatedQuantity)
    }

    // totalPrice

    const totalPrice = products.reduce((total,product)=>(
        total + product.quantity * product.price
    ),0)
    
  return (
    <div>
        <h1>simple shoping cart</h1>
        <h3>Add product</h3>
        <input type="text"
         placeholder='Product Name' 
         onChange={(e)=>setProductName(e.target.value)}
         value={productName}/>
        <input type="number"
         placeholder='Product price'
         onChange={(e)=>setProductPrice(e.target.value)}
         value={productPrice} />
         <button onClick={AddProduct}>Add Product</button>
         
         {products.length>0? <div>
            <ul>
                {products.map(product=>(
                    <li key={product.id}>
                        <strong>{product.name}</strong>
                        <strong> -${product.price.toFixed(2)}</strong>
                        <div>
                            quantity: <button onClick={()=> decreaseQuantity(product.id)}>-</button>{product.quantity} <button onClick={()=> increseQuantity(product.id)}>+</button>
                        </div>
                        <button onClick={()=> removeProduct(product.id)}>Remove</button>
                    </li>
                
            ))}
            </ul>
            <p>total is: ${totalPrice}</p>
         </div> 
         
         
         : <p>This cart is empty</p>}


    </div>
  )
}

export default Cart