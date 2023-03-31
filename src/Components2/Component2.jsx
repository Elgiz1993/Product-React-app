import React, {useState} from 'react'
// import PortalComponent from './PortalComponent'
import Modal from './Modal'

function Component2() {

	let [showModel, updateShowModel] = useState(false)

	function displayModel(){
		updateShowModel(true)
	}
	
	function hideModel(){
		updateShowModel(false)
	}

  return (
	 <div style={{width: 300, position: 'relative'}}>
		<h3>This is Component 2</h3>
		<p>This is paragraph</p>
		{/* <PortalComponent /> */}   
		<button onClick={displayModel}>Show Modal</button>
		<Modal showModal = {showModel} hideModal={hideModel}/>
	 </div>
  )
}

export default Component2