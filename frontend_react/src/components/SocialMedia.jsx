import React from 'react';
import { BsGithub, BsBehance, BsGlobe2 } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/zaynejaz">
        <BsGithub />
      </a>
    </div>
    <div>
      <a href="https://linkedin.com/in/zaynejaz">
        <FaLinkedinIn />
      </a>
    </div>
    <div>
      <a href="https://behance.net/zaynejaz">
        <BsBehance />
      </a>
    </div>
    <div>
      <a href="https://zaynejaz.com/">
        <BsGlobe2 />
      </a>
    </div>
  </div>
);

export default SocialMedia;