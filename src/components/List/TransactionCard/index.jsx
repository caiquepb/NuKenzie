import TrashButton from "../../../assets/TrashButton.svg";
import "./styles.css";

export const TransactionCard = ({
  transaction,
  listTransactions,
  setListTransactions,
}) => {
  const deleteTransactionCard = (card) => {
    const newListTransactions = listTransactions.filter(
      (transaction) => card != transaction
    );
    setListTransactions(newListTransactions);
  };
  return (
    <li className="optionList__container">
      <div className="optionList__box">
        <h1 className="optionList__title">{transaction.title}</h1>
        <p className="optionList__valueType">{transaction.valueType}</p>
      </div>
      <p className="optionList__value">
        {Number(transaction.value).toLocaleString("pt-Br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <img
        className="optionList__image"
        src={TrashButton}
        alt="Ícone de Deletar"
        onClick={() => deleteTransactionCard(transaction)}
      />
    </li>
  );
};
