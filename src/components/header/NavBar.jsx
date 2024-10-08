const NavBar = () => {
  return (
    <nav className="text-[--color]">
      <ul className="flex gap-4">
        <li className="p-3">
          <a href="#home">Home</a>
        </li>
        <li className="p-3">
          <a href="#about">About</a>
        </li>
        <li className="p-3">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="p-3">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
