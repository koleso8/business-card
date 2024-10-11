const MobileMenu = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`absolute top-[70px] w-screen h-screen  bg-slate-300 opacity-50  transition ease-linear duration-300 z-50  ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {' '}
      MENU
    </div>
  );
};

export default MobileMenu;
