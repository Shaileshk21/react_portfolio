/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { useState } from 'react';
const Nav = () => {
  const [activeNav, setActiveNa] = useState('#');

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNa('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <AiOutlineHome />
      </a>

      <a
        href="#about"
        onClick={() => setActiveNa('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNa('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNa('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceLine />
      </a>

      <a
        href="#contact"
        onClick={() => setActiveNa('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
