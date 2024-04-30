// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getNewsThunk } from "../../redux/news/thunk";
import { logOut } from "../../redux/auth/authSlice";
import { delToken } from "../../services/auth-service";
// import { getProfileThunk } from "../../redux/auth/thunk";

const Header = ({ showModal }) => {
  const { profile} = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogOut = () => {
    dispatch(logOut());
    delToken();
  };
  const handleRegister = () => {
    navigate("/signUp");
  };

  // useEffect(() => {
  //   access_token&&dispatch(getProfileThunk())
  // }, [access_token, dispatch])

  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav">
            <NavLink className="nav-link text-white" aria-current="page" to="/">
              Home
            </NavLink>
            {/* {access_token && (
              <> */}
                <NavLink className="nav-link text-white" to="/news">
                  News
                </NavLink>
                <NavLink className="nav-link text-white" to="/todo">
                  Todo
                </NavLink>
                <NavLink className="nav-link text-white" to="/products">
                  Products
                </NavLink>
              {/* </>
            )} */}
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button>
        <button
          className="btn btn-outline-success"
          onClick={profile ? handleLogOut : handleLogin}
        >
          {profile ? "LogOut" : "Login"}
        </button>
        <button className="btn btn-outline-success" onClick={handleRegister}>
          Registration
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            dispatch(getNewsThunk());
          }}
        >
          Thunk
        </button>
        {profile && <div className="text-white">{profile.name}</div>}
      </div>
    </nav>
  );
};

export default Header;
