import { TransactionCard } from "./TransactionCard";
import "./styles.css";

export const List = ({ listTransactions, setListTransactions }) => {
  return (
    <section className="sectionPage__container">
      <h1 className="sectionPage__title">Resumo financeiro</h1>
      <ul className="fullList__container">
        {listTransactions.map((transaction, index) => (
          <TransactionCard
            key={index}
            transaction={transaction}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
        ))}
      </ul>
    </section>
  );
};
