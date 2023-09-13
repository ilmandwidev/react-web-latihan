import logo from "../images/react.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Part 1</h4>
    </nav>
  );
};
export default Navbar;
