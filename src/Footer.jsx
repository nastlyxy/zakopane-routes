import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Footer() {
  const isDarkMode = useContext(ThemeContext);
  return (
    <footer className={`footer ${isDarkMode ? "dark" : ""}`}>
      <div className="footer-project-info">
        <p className="footer-description">
          Zakopane Routes. Plan your perfect mountain adventure with ease.
        </p>
      </div>
      <div className="footer-author-info">
        <p className="footer-copyright">
          © 2026 Developed by Anastasiya Haiduk
        </p>
      </div>
    </footer>
  );
}
