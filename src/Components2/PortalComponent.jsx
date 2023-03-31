import React from 'react'
import ReactDOM  from 'react-dom'

function PortalComponent() {
  return (
	 ReactDOM.createPortal(<h1>This is PortalComponent</h1>, document.getElementById('root-portal'))
  )
}

export default PortalComponent