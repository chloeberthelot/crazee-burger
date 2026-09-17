import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";
import logo from "../logo-burger.png";
import { FiChevronRight } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";

export default function LoginForm() {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    navigate(`order/${inputValue}`);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <div className="logo-title">
        <h1>CRAZEE </h1>
        <img className="logo" src={logo} alt="Logo Crazee Burger" />
        <h1> BURGER</h1>
      </div>

      <h2>Bienvenue chez nous !</h2>

      <form className="form" onSubmit={handleSubmit}>
        <hr />
        <h3>Connectez-vous</h3>

        <div className="username-wrapper">
          <FaUserCircle className="username-icon" />
          <input
            className="username-input"
            type="text"
            required
            placeholder="Entrez votre prénom"
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        <br />

        <button className="acces-btn">
          Accéder à mon espace <FiChevronRight />
        </button>
      </form>
    </div>
  );
}
