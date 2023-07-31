import NoCardImage from "../../assets/NoCard.svg";
import "./styles.css";

export const NoCard = () => (
  <section className="noCard__container">
    <h1 className="noCard__title">Reusumo financeiro</h1>
    <p className="noCard__paragraph">
      Você ainda não poussui nenhum lançamento
    </p>
    <img src={NoCardImage} alt="No Card Image" />
  </section>
);
