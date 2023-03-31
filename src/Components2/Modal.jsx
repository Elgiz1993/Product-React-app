import React from "react";
import ReactDOM from 'react-dom'
import './Modal.css'

function Modal(props) {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className={`alert ${props.showModal ? "" : "hidden"}`}>
        <h2>This is an alert</h2>
        <p>
          This is a very simple example of how a custom alert window can be
          created and displayed dynamically using JavaScript
        </p>
        <button className="modal-btn" onClick={props.hideModal}>OK</button>
      </div>
      <button className={`overlay ${props.showModal ? "" : "hidden"}`}></button>
    </React.Fragment>,document.getElementById('root-portal')  );
}

export default Modal;
