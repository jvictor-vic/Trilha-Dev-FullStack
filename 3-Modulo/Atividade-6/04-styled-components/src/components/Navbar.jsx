import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Navbar() {
    return (
        <header>
            <img id="logo" className="header-icon" src="/placeholder.png" />
            <img id="cart" className="header-icon" src="/shopping-cart.png"/>
            <ThemeToggle/>
        </header>
    )
}

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className={`toggle-button ${theme}`} onClick={toggleTheme}>
      <span className="icon">{theme === "light" ? "🌞" : "🌙"}</span>
      <div className="toggle-slider" />
    </button>
  );
};