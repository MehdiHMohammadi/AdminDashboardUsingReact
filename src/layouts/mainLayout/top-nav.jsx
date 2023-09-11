import { Link } from "react-router-dom";
import { useAppContext } from "../../contexts/app/app-context";

import ChangeLanguage from "../../components/change-language";
import ChangeTheme from "../../components/change-theme";
import Logout from "./../../components/logout";

const TopNav = () => {
  const { toggleSidebar } = useAppContext();

  return (
    <nav className="navbar">
      <Link className="sidebar-toggle" onClick={toggleSidebar}>
        <i className="hamburger align-self-center"></i>
      </Link>
      <div className="d-flex align-items-center gap-3  me-3">
        <ChangeLanguage />
        <ChangeTheme />
      </div>
      <Logout />
    </nav>
  );
};

export default TopNav;
