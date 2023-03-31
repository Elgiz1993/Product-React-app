import  Button  from './Button';
import React, {useState} from "react";

let style = {	padding: '0 20px',	fontSize: 20}


function ProductDetails(props) {

	let badgeClass = 'badge-margin-left-240 badge ';
	badgeClass +=  props.isAvailable ? 'bg-success' : 'bg-danger';

	let [productCount, updateCount] = useState(0)

	let incrementProductCount = function(){
		updateCount(--productCount)
	}
	
	let decrementProductCount = function(){
		updateCount(++productCount)
	}
	
	function displayFormatedProductCount(){
		return productCount > 0 ? productCount : 'Zero';
	}

	return (
      <div className="d-flex align-items-center justify-content-start mt-1">
        <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
          ${props.price}
        </h6>
        <Button eventHundler={incrementProductCount} disable={productCount === 0} children='-'></Button>
        <span style={style}>{displayFormatedProductCount()}</span>
        <Button eventHundler={decrementProductCount}>+</Button>
        <span className={badgeClass}>
          {props.isAvailable ? "Available" : "Unavailable"}
        </span>
      </div>
  );
}

export default ProductDetails;
