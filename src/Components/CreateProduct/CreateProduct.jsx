import React from 'react'
import ProductForm from './ProductForm'
import { useState } from 'react'

function CreateProduct(props) {

	let [showForm, updateShowForm] = useState(false)

	function onCrateProduct(product){
		// console.log(product)
		props.createProduct(product)
	}

	function onCreateNewProduct(){
		updateShowForm(true)
	}

	function onProductSubmittedOrCanceled(){
		updateShowForm(false)
	}

  return (
	
		<div style={{backgroundColor: 'white', padding: '10px 20px', borderRadius: 5 }}>
			{!showForm && <button className='btn btn-warning' onClick={onCreateNewProduct}>Create Product</button>}
			{showForm && <ProductForm createProduct={onCrateProduct} onCancel={onProductSubmittedOrCanceled}/>}
		</div>
	
  )
}

export default CreateProduct