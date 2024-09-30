import React, { useEffect } from 'react';
import headerHide from './headerHide';
import { RxColorWheel } from 'react-icons/rx';
import { effect } from '../../util/vantaAnimation';

const Header = () => {
  useEffect(() => {
    headerHide();
    effect();
  });
  return (
    <header className="fixed backdrop-blur-3xl w-full transition-transform ease-in-out delay-150 duration-300 header flex items-center ">
      <RxColorWheel
        size="60px"
        className="animate-spin-slow text-[--color-text]"
      />
      <h2 className=" text-4xl text-[--color-text]">dev.Koleso</h2>
    </header>
  );
};

export default Header;
