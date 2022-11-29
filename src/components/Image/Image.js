import React from 'react';

import './Image.css';

const image = props => (
  // <div
  //   className="image"
  //   style={{
  //     backgroundImage: `url(${props.imageUrl})`,
  //     backgroundSize: props.contain ? 'contain' : 'cover',
  //     backgroundPosition: props.left ? 'left' : 'center'
  //   }}
  // />
  <img src={props.imageUrl} alt={props.alt} />
);

export default image;
