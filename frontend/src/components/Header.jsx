import Logo from "./Logo";
import Button from "./Button";
import { Link } from "react-router-dom";
const Header = () => (
  <nav className="flex justify-between flex-wrap p-2 md:p-4 max-w-[1800px] mx-auto">
    <div className="flex items-center gap-6">
      <Logo />
      <h2 className="uppercase text-2xl font-bold">Nexus Bank</h2>
    </div>
    <div className="items-center gap-10 hidden md:flex">
      <Link
        to={"/login"}
        aria-label="Login"
        className="hover:text-customOrangeLight transition-all"
      >
        Login
      </Link>
      <Link to={"/signup"}>
        <Button>Sign up</Button>
      </Link>
    </div>
  </nav>
);
export default Header;
