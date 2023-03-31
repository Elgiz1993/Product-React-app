import { useState } from "react";
import CreateProduct from "./Components/CreateProduct/CreateProduct";
import FilterProduct from "./Components/FilterProduct/FilterProduct";
import ProductList from "./Components/ProductList/ProductList";

let products = [
  {
    pId: 1,
    pName: "First BMW",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere voluptas repellat sapiente aut quos.",
    isAvailable: true,
    image: "images/1.jpg",
    price: 120,
    stock: 20
  },
  {
    pId: 2,
    pName: "Second BMW",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere voluptas repellat sapiente aut quos.",
    isAvailable: false,
    image: "images/2.jpg",
    price: 130,
    stock: 15
  },
  {
    pId: 3,
    pName: "Third BMW",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere voluptas repellat sapiente aut quos.",
    isAvailable: true,
    image: "images/3.jpg",
    price: 140,
    stock: 8
  },
  {
    pId: 4,
    pName: "Fourth BMW",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere voluptas repellat sapiente aut quos.",
    isAvailable: true,
    image: "images/4.jpg",
    price: 150,
    stock: 11
  },
  {
    pId: 5,
    pName: "Fifth BMW",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis facere voluptas repellat sapiente aut quos.",
    isAvailable: false,
    image: "images/5.jpg",
    price: 160,
    stock: 5
  },
];

function App() {

  let [newProductList, updateProductList] = useState(products)
  let [filterTextValue, updateFilterText] = useState('all')

  let filteredProductList = newProductList.filter((product) => {
    if(filterTextValue === 'available'){
      return product.isAvailable === true;
    } else if(filterTextValue === 'unavailable'){
      return product.isAvailable === false
    } else {
      return product
    }
  })

  function createProduct(product){
    product.pId = newProductList.length + 1;
    updateProductList([product, ...newProductList])
  }

  function onFilterValueSelected(filterValue){
    updateFilterText(filterValue)
  }

  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
      <CreateProduct createProduct={createProduct}/>
      <FilterProduct filterValueSelected={onFilterValueSelected}/>
      <ProductList newProductList={filteredProductList}/>
      </div>
    </div>
  );
}

export default App;
