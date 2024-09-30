import React, { useEffect } from 'react';
import headerHide from './headerHide';
import { RxColorWheel } from 'react-icons/rx';
import { startEffect } from '../../util/vantaAnimation';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, setTheme } from '../../redux/theme/slice';

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    headerHide();
    startEffect();
    dispatch(setTheme());
  });
  return (
    <header className="fixed backdrop-blur-3xl w-full transition-transform ease-in-out delay-150 duration-300 header flex items-center ">
      <RxColorWheel
        size="60px"
        className="animate-spin-slow text-[--color-text]"
      />
      <h2 className=" text-4xl text-[--color-text]">dev.Koleso</h2>
      <button onClick={() => dispatch(changeTheme())}>☼</button>
    </header>
  );
};

export default Header;
