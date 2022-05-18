import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTelegramPlane} from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <a href='https://t.me/valeria_4312' target="_blank" rel="noreferrer">
      <FaTelegramPlane />
    </a>
    <a href='https://www.facebook.com/valeriya.brushnevskaya' target="_blank" rel="noreferrer">
      <FaFacebookF />
    </a>
    <a href='https://www.linkedin.com/in/valeriia-brushnevska-103b35166' target="_blank" rel="noreferrer">
      <FaLinkedinIn />
    </a>
  </div>
);

export default SocialMedia;