import { useNavigate } from "react-router-dom";
import { useAppContext } from "../contexts/app/app-context";
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  const { language } = useAppContext();
  const navigate = useNavigate();

  const handlerLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={`${language === "fa" ? "me-auto" : "ms-auto"}`}>
      <button className="btn " onClick={handlerLogout}>
        <h2 className="btn-outline-danger fw-bolder ">
          <BiLogOut style={{ verticalAlign: "middle", color: "red" }} />
        </h2>
      </button>
    </div>
  );
};
export default Logout;
