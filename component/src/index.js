import React from 'react';

const Responcy = ({ src='' }) => {
    
  //declarations
  let parsedSrc = JSON.parse(src),
      updatedSrc = '';
  
  //options
  let sizesOpts = {
    small: {size: parsedSrc[0].size, src: parsedSrc[0].src},
    medium: {size: parsedSrc[1].size, src: parsedSrc[1].src},
    large: {size: parsedSrc[2].size, src: parsedSrc[2].src}
  }

  //utilities
  let getWindowWidth = () => window.innerWidth;

  let getWindowHeight = () => window.innerHeight;

  //actions
  window.onresize = (e) => {
    if (getWindowWidth() <= sizesOpts.small.size) {
      updatedSrc = sizesOpts.small.src;
    } else if (getWindowWidth() > sizesOpts.small.size && getWindowWidth() < sizesOpts.medium.size) {
      updatedSrc = sizesOpts.medium.src;
    } else if (getWindowWidth() > sizesOpts.medium.size && getWindowWidth() < sizesOpts.large.size) {
      updatedSrc = sizesOpts.medium.src;
    } else if (getWindowWidth() >= sizesOpts.large.size) {
      updatedSrc = sizesOpts.large.src;
    }

    //logging
    console.log(updatedSrc);
  }

  //bring the image!
  return <img src={updatedSrc} width="100%" height="100%"/>
}

export default Responcy;
