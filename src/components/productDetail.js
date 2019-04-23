import React from 'react';
import { Button, ModalHeader, ModalBody } from 'reactstrap';

const ProductDetail = (props) => {
  return (
    <React.Fragment>
      <ModalHeader toggle={props.toggle}>{props.data.name}</ModalHeader>
      <ModalBody>
        <img src={props.img}/>
      </ModalBody>
    </React.Fragment>
  );
};

export default ProductDetail;
