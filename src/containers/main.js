import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import ProductDetail from '../components/productDetail';
import img0 from '../img/1.jpg';
import img1 from '../img/2.jpg';
import img2 from '../img/3.jpg';
import img3 from '../img/4.jpg';
import img4 from '../img/5.jpg';
import img5 from '../img/6.jpg';
import img6 from '../img/7.jpg';
import img7 from '../img/8.jpg';
import img8 from '../img/9.jpg';
import img9 from '../img/10.jpg';

const mockData = [
  {
    'name': 'PIJPFNE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'fjpefj2',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'JOPIJOI',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'PIJPFNPOJEFPE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'WEFOPJ QWEOFH',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'PIJPFNE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'fjpefj2',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'JOPIJOI',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'PIJPFNPOJEFPE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'WEFOPJ QWEOFH',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'PIJPFNE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'fjpefj2',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'JOPIJOI',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'PIJPFNPOJEFPE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'WEFOPJ QWEOFH',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'PIJPFNE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'fjpefj2',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'JOPIJOI',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco'
  },
  {
    'name': 'PIJPFNPOJEFPE',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'WEFOPJ QWEOFH',
    'summary': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  }
];

const mockImg = [ img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img0, img1, img2, img3, img4, img5, img6, img7, img8, img9 ];

class Main extends React.Component {
  constructor() {
    super();
    this.toggleModal = this.toggleModal.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      modalOpen: new Array(mockData.length).fill(false)
    }
  }
  toggleModal(i) {
    const newModals = this.state.modalOpen.map( (boolean, index) => {
      return (index === i ? !boolean : false);
    });
    this.setState({ modalOpen: newModals });
      console.log({i, newModals});
  }
  addToCart() {
    console.log('addToCart');
  }
  render () {
    const { modalOpen } = this.state;
    return (
      <div className='product-container mondrain'>
        <main>
          {mockData.map( (data,index) =>
            <article key={index} onClick={() => {this.toggleModal(index)}} className='photo'>
                <span className='middle-helper'></span>
                <img src={mockImg[index]} className='photo__img'/>
                <div className='photo__caption'>
                  <h3>{data.name}</h3>
                  <p>{data.summary.length > 50 ? data.summary.slice(0, 50) : data.summary}</p>
                </div>
              <Modal isOpen={modalOpen[index]} toggle={() => {this.toggleModal(index)}} size='lg'>
                <ProductDetail
                  data={data}
                  img={mockImg[index]}
                  toggle={() => {this.toggleModal(index)}}
                  save={this.addToCart}
                />
              </Modal>
            </article>
          )}
        </main>
      </div>
    );
  }
}

Main.propTypes = {};

export default Main;
