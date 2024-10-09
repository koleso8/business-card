import { useEffect, useState } from 'react';
import headerHide from './headerHide';
import { RxColorWheel } from 'react-icons/rx';
// import { startEffect } from '../../util/vantaAnimation';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme, setTheme } from '../../redux/theme/slice';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { selectTheme } from '../../redux/theme/selectors';
import { MdSunny } from 'react-icons/md';
import NavBar from './NavBar';
import { scrollToTop } from '../../helpers/scrollToTop';
import BurgerMenu from './BurgerMenu';
import MobileMenu from './MobileMenu';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
  const [isOpen, setIsOpen] = useState(false);
  const { isTablet, isMobile } = useScreenWidth();
  const handleOpenMenu = () => {
    setIsOpen(true);
  };
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    headerHide();
    dispatch(setTheme());
  });
  return (
    <>
      <header className="fixed backdrop-blur-xl w-screen transition-transform ease-in-out delay-150 duration-300 header flex items-center justify-center  py-2 z-50">
        <div className="w-[90%] flex items-center justify-between gap-3">
          <button className="flex items-center gap-2" onClick={scrollToTop}>
            <RxColorWheel
              size="60px"
              className="animate-spin-slow text-[--color]"
            />
            <h2 className=" text-4xl text-[--color]">dev.Koleso</h2>
          </button>

          {isTablet && <NavBar />}
          {isTablet && (
            <button
              onClick={() => dispatch(changeTheme())}
              className="flex justify-center items-center bg-[--color]  w-10 h-10 p-1 rounded-full"
            >
              {theme === 'light' ? (
                <BsFillMoonStarsFill
                  size="26px"
                  className="text-[--bg-color]"
                />
              ) : (
                <MdSunny size="30px" className="text-[--bg-color]" />
              )}
            </button>
          )}
          {isMobile && <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
        {isMobile && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />}
      </header>
    </>
  );
};

export default Header;
