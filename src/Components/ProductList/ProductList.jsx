import React from "react";
import Products from "./Products";

function ProductList(props) {
  // if(props.newProductList.length === 0) return <h2>No products is available</h2>
  return props.newProductList.length === 0 ?  <h2>No products is available</h2> :
   (
    
        <ul className="list-group shadow">
          {
			 	props.newProductList.map((product) => {            
              return <Products
                id={product?.pId}
                key={product?.pId}
                name={product?.pName}
                desc={product?.desc}
                isAvailable={product?.isAvailable}
                imageUrl={product?.image}
                price={product?.price}
                stock={product?.stock}
              />            
          })}
        </ul>
     
  );
}

export default ProductList;
