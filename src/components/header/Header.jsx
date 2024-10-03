import React, { useEffect } from 'react';
import headerHide from './headerHide';
import { RxColorWheel } from 'react-icons/rx';
import { startEffect } from '../../util/vantaAnimation';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, setTheme } from '../../redux/theme/slice';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { selectTheme } from '../../redux/theme/selectors';
import { MdSunny } from 'react-icons/md';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  useEffect(() => {
    headerHide();
    startEffect();
    dispatch(setTheme());
  });
  return (
    <header className="fixed backdrop-blur-3xl w-screen transition-transform ease-in-out delay-150 duration-300 header flex items-center justify-center  py-2">
      <div className="w-[90%] flex items-center gap-3">
        <RxColorWheel
          size="60px"
          className="animate-spin-slow text-[--color]"
        />
        <h2 className=" text-4xl text-[--color]">dev.Koleso</h2>
        <button
          onClick={() => dispatch(changeTheme())}
          className="flex justify-center items-center bg-[--color]  w-10 h-10 p-1 rounded-full"
        >
          {theme === 'light' ? (
            <BsFillMoonStarsFill size="26px" className="text-[--bg-color]" />
          ) : (
            <MdSunny size="30px" className="text-[--bg-color]" />
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
