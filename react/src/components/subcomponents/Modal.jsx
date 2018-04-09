import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
   
    return (
    
        <div class="container">
        <h2>Modal Example</h2>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
        <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">

        <div class="modal-content">
        <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
        <p>
          <div>
          <FormContainer/>
          </div>
        </p>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
        </div>

        </div>
        </div>
        </div>




    
  
  

    );
  }
}


export default Modal;