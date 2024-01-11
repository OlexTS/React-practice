import { useState } from "react";

const FormLogin = ({ createUser, closeModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [gender, setGender] = useState("male");

  const handleChangeEmail = ({ target }) => {
    setEmail(target.value);
  };
  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //   this.props.createUser(this.state)
    if (!email || !password) {
      return alert("Please fill in all fields!");
    }
    createUser({
      email,
      password,
      gender,
    });
    setEmail("");
    setPassword("");
    closeModal();
  };
  const handleCheck = ({ target: { checked } }) => {
    setIsChecked(checked);
  };
  const handleRadio = ({ target: { value } }) => {
    setGender(value);
  };

  return (
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
          onChange={handleChangeEmail}
          value={email}
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
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          checked={isChecked}
          onChange={handleCheck}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          I agree
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked={gender === "male"}
          onChange={handleRadio}
          value="male"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          checked={gender === "female"}
          onChange={handleRadio}
          value="female"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <button type="submit" disabled={!isChecked} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default FormLogin;
