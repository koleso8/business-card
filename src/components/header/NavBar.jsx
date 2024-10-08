const NavBar = () => {
  return (
    <nav className="text-[--color]">
      <ul className="flex gap-4">
        <li className="p-3">
          <a href="#hero">Home</a>
        </li>
        <li className="p-3">
          <a href="#about">About</a>
        </li>
        <li className="p-3">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="p-3">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
