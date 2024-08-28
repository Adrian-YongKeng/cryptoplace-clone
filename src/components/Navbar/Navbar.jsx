import { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "gbp": {
        setCurrency({ name: "gbp", symbol: "£" });
        break;
      }
      case "kwd": {
        setCurrency({ name: "kwd", symbol: "د.ك" });
        break;
      }
      case "cny": {
        setCurrency({ name: "cny", symbol: "¥" });
        break;
      }
      case "myr": {
        setCurrency({ name: "myr", symbol: "RM" });
        break;
      }
      case "sgd": {
        setCurrency({ name: "sgd", symbol: "S$" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="kwd">KWD</option>
          <option value="cny">CNY</option>
          <option value="myr">MYR</option>
          <option value="sgd">SGD</option>
        </select>

        <button>
          Sign Up
          <img src={arrow_icon} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
