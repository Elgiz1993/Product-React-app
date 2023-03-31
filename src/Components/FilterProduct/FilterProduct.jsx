import React from 'react'
import './FilterProduct.css'

function FilterProduct(props) {

	function onFilterValueChange(event){
		props.filterValueSelected(event.target.value)
	}

  return (
	 <div className='filter-area'>
		<select name="isAvailable" id="" onChange={onFilterValueChange}>
			<option value="all">All</option>
			<option value="available">Available</option>
			<option value="unavailable">Unavailable</option>
		</select>
	 </div>
  )
}

export default FilterProduct