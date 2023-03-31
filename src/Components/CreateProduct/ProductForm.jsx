import React, { useState } from "react";

function ProducthtmlForm(props) {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDescription, updateDescription] = useState("");
  let [pAvailable, updateAvailable] = useState("");
  let [pImageUrl, updateImageUrl] = useState("");

  // let [userInput, updateUserInput] = useState({
  // 	pName: '',
  // 	pPrice: '',
  // 	pDescription: '',
  // 	pAvailable: '',
  // 	pImageUrl: ''
  // })

  function nameInputHandler(event) {
    updateName(event.target.value);
    // updateUserInput((prevState) => {
    // 	return { ...prevState, pName: event.target.value}
    // })
  }
  function priceInputHandler(event) {
    updatePrice(event.target.value);
    // updateUserInput((prevState) => {
    // 	return { ...prevState, pPrice: event.target.value}
    // })
  }
  function descriptionInputHandler(event) {
    updateDescription(event.target.value);
    // updateUserInput((prevState) => {
    // 	return { ...prevState, pDescription: event.target.value}
    // })
  }
  function availabilityInputHandler(event) {
    updateAvailable(event.target.checked);
    // updateUserInput((prevState) => {
    // 	return { ...prevState, pAvailable: event.target.checked}
    // })
  }
  function imageInputHandler(event) {
    updateImageUrl(event.target.value);
    // updateUserInput((prevState) => {
    // 	return { ...prevState, pImageUrl: event.target.value}
    // })
  }

  function createProductEventHundler(event) {
    event.preventDefault();
    let product = {
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailable),
      image: pImageUrl,
      price: Number(pPrice),
    };
    updateName("");
    updatePrice("");
    updateDescription("");
    updateAvailable(false);
    updateImageUrl("");

	 props.createProduct(product)

   props.onCancel()
   //  console.log(product);
  }

  return (
    <form action="" className="row g-3" onSubmit={createProductEventHundler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          value={pName}
          className="form-control"
          id="name"
          placeholder="Product Name"
          onChange={nameInputHandler}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="price">Product price</label>
        <input
          type="number"
          value={pPrice}
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          value={pDescription}
          className="form-control"
          id="description"
          placeholder="Product Description"
          onChange={descriptionInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          type="checkbox"
          checked={pAvailable}
          className="form-check-input"
          role="switch"
          id="isAvailable"
          onChange={availabilityInputHandler}
        />
        <label htmlFor="isAvailable" className="form-check-label">
          Is product available in stock
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          value={pImageUrl}
          className="form-control"
          id="select-image"
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">Add Product</button>
      <button type="button" className="btn btn-danger" onClick={props.onCancel}>Cancel</button>
    </form>
  );
}

export default ProducthtmlForm;
