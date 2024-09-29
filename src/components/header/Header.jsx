import React, { useEffect } from 'react';
import headerHide from './headerHide';
import { RxColorWheel } from 'react-icons/rx';

const Header = () => {
  useEffect(() => {
    headerHide();
  });
  return (
    <header className="fixed backdrop-blur-3xl w-full transition-transform ease-in-out delay-150 duration-300 header flex items-center ">
      <RxColorWheel size="60px" className="animate-spin-slow" />
      <h2 className=" text-4xl">dev.Koleso</h2>
    </header>
  );
};

export default Header;
