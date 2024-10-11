import NavBar from './NavBar';

const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute top-[70px] left-0 w-screen h-screen  transition ease-linear duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default MobileMenu;
