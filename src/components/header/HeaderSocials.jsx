import React from 'react';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="__blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/" target="__blank">
        <FaGithub />
      </a>
      <a href="https://facebook.com/" target="__blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
