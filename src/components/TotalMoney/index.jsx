import "./styles.css";

export const TotalMoney = ({ listTransactions }) => (
  <section className="totalMoney__container">
    <div className="totalMoney__box">
      <h1 className="totalMoney__title">Valor Total: </h1>
      <p className="totalMoney__paragraph">O valor se refere ao saldo</p>
    </div>
    <p className="totalMoney__result">
      {listTransactions
        .reduce(
          (previousValue, currentValue) =>
            currentValue.valueType == "entrada"
              ? previousValue + Number(currentValue.value)
              : previousValue - Number(currentValue.value),
          0
        )
        .toLocaleString("pt-Br", { style: "currency", currency: "BRL" })}
    </p>
  </section>
);
