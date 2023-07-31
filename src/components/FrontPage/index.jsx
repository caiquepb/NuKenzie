import FrontPageImage from "../../assets/FrontPageImage.svg";
import LogoNuKenzieFrontPage from "../../assets/NuKenzieLogoFrontPage.svg";
import "./styles.css";

export const FrontPage = ({ setPage }) => {
  const Login = () => setPage(false);

  return (
    <main className="main__container">
      <section className="section__container">
        <img src={LogoNuKenzieFrontPage} alt="Logo Nu Kenzie" />
        <div className="section__box">
          <h1 className="section__title">
            Centralize o controle das suas finanças
          </h1>
          <p className="section__paragraph">de forma rápida e segura</p>
          <button className="section__button" type="button" onClick={Login}>
            Iniciar
          </button>
        </div>
      </section>
      <img className="frontPageImage" src={FrontPageImage} alt="Front Page Image" />
    </main>
  );
}
