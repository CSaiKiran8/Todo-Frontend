import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/tokenSlice";
import { setName } from "../redux/nameSlice";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";


const cookies = new Cookies();

const Navbar = () => {

  const name = useSelector((state) => state.name.value);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.value);
  const navigate = useNavigate();

  const handleLogout = async () => {
    cookies.remove("token");
    dispatch(setToken(null));
    dispatch(setName(null));
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ "backgroundColor": "#b4b4b4" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand" style={{ color: "#255500" }}>
          Todo App
        </span>
        <span style={{ color: "#255500" }}>
          {token ? `Hi👋 ${name}, Welcome😇` : ""}
        </span>
        <span>
          {token ? (
            <button
              className="btn btn-dark"
              title="Logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            ""
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;