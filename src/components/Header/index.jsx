import LogoNuKenzieMainPage from "../../assets/NuKenzieLogoMainPage.svg";
import "./styles.css";

export const Header = ({ setPage }) => {
  const Logout = () => setPage(true);

  return (
    <header className="header__container">
      <img src={LogoNuKenzieMainPage} alt="Logo Nu Kenzie" />
      <button className="header__button" type="button" onClick={Logout}>
        Início
      </button>
    </header>
  );
};
