import { useAppContext } from "../../contexts/app/app-context";
import logo from "@assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { BiLogoDiscourse, BiCategoryAlt } from "react-icons/bi";
import { TbDiscountCheck } from "react-icons/tb";

const Sidebar = () => {
  const { showSidebar } = useAppContext();
  const { t } = useTranslation();
  return (
    <nav className={`sidebar ${!showSidebar ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <a className="sidebar-brand d-flex flex-column align-items-center pt-5 mb-0">
          <img
            src={logo}
            className="pb-2"
            style={{ height: "40px" }}
            alt="logo app"
          />
          <p className="mb-0">{t("mainLayout.sidebar.subtitle")}</p>
        </a>

        <ul className="sidebar-nav pe-0">
          <li className="sidebar-header fw-bolder fs-lg">
            {t("mainLayout.sidebar.courseManagement")}
          </li>
          <li className="sidebar-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              to={"/"}
            >
              <BiLogoDiscourse style={{ fontSize: "24px" }} />
              <span className="align-middle me-2">
                {t("mainLayout.sidebar.allCourses")}
              </span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              to={"/course-categories"}
            >
              <BiCategoryAlt style={{ fontSize: "24px" }} />

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.coursesCategory")}
              </span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
              to={"/pages-categories"}
            >
              <BiCategoryAlt style={{ fontSize: "24px" }} />

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.pagesCategory")}
              </span>
            </NavLink>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link">
              <TbDiscountCheck style={{ fontSize: "24px" }} />

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.courseDiscount")}
              </span>
            </a>
          </li>
          <li className="sidebar-header fw-bolder fs-lg">
            {t("mainLayout.sidebar.userManagement")}
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-user align-middle me-2"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.teacherManagement")}
              </span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users align-middle me-2"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.studentManagement")}
              </span>
            </a>
          </li>
          <li className="sidebar-header fw-bolder fs-lg">
            {t("mainLayout.sidebar.blogManagement")}
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-tag align-middle me-2"
              >
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                <line x1="7" y1="7" x2="7.01" y2="7"></line>
              </svg>

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.tagManagement")}
              </span>
            </a>
          </li>
          <li className="sidebar-item">
            <a className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-file-text align-middle me-2"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>

              <span className="align-middle me-2">
                {t("mainLayout.sidebar.postManagement")}
              </span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
