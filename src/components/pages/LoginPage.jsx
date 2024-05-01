import React from "react";
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
// import { login } from "../../services/auth-service";
import { loginThunk } from "../../redux/auth/thunk";
import { toast } from "react-toastify";

const LoginPage = () => {
  // const navigate = useNavigate();
  // const isAuth = useSelector((state) => state.auth.access_token);
  // useEffect(() => {
  //   isAuth && navigate("/");
  // }, [isAuth, navigate]);

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };
    dispatch(loginThunk(user))
      .unwrap()
      // .then(() => {
      //   dispatch(getProfileThunk());
      //   // navigate("/");
      // })
      .catch(() => toast.error("Something went wrong"));
  };
  return (
    <div
      className="card position-absolute top-50 start-50 translate-middle p-2"
      style={{ minWidth: "350px" }}
    >
      <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div>
          <Link to="/signUp">signUp</Link>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
