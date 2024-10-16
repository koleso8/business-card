import { scrollToTop } from '../../helpers/scrollToTop';
import { useScreenWidth } from '../../hooks/useScreenWidth';

const NavBar = ({ isOpen, setIsOpen }) => {
  const { isMobile } = useScreenWidth();

  return (
    <nav
      className={`text-[--color] ${
        isMobile &&
        'flex items-start pt-16 justify-center w-full h-screen bg-black'
      }`}
    >
      <ul
        className={`flex gap-4 ${
          isMobile && 'flex-col text-2xl gap-10 text-center'
        }`}
      >
        <li className="p-3 cursor-pointer">
          <a
            onClick={() => {
              scrollToTop();
              setIsOpen(false);
            }}
          >
            Головна
          </a>
        </li>
        <li className="p-3">
          <a href="#about" onClick={() => setIsOpen(false)}>
            Про мене
          </a>
        </li>
        <li className="p-3">
          <a href="#portfolio" onClick={() => setIsOpen(false)}>
            Портфоліо
          </a>
        </li>
        <li className="p-3">
          <a href="#contacts" onClick={() => setIsOpen(false)}>
            Контакти
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
