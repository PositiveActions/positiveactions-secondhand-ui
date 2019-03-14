import React from 'react';
import PropTypes from 'prop-types';
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
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'fjpefj2',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'name': 'JOPIJOI',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'name': 'PIJPFNPOJEFPE',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'WEFOPJ QWEOFH',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'PIJPFNE',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'fjpefj2',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'name': 'JOPIJOI',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'name': 'PIJPFNPOJEFPE',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  },
  {
    'name': 'WEFOPJ QWEOFH',
    'content': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime explicabo, soluta doloribus, temporibus accusamus voluptatibus. Sequi aliquid iure, iste omnis neque repellendus ullam. Autem, nisi sunt, voluptatum ipsam unde hic',
  }
];

const mockImg = [ img0, img1, img2, img3, img4, img5, img6, img7, img8, img9 ];

class Main extends React.Component {
  constructor() {
    super();
  }
  render () {
    return (
      <div className='product-container mondrain'>
        <main>
          {mockData.map( (data,index) =>
            <article key={index}>
              <img src={mockImg[index]}/>
              <h3>{data.name}</h3>
              <p>{data.content}</p>
            </article>
          )}
        </main>
      </div>
    );
  }
}

Main.propTypes = {

};

export default Main;
