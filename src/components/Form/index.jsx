import { useState } from "react";
import "./styles.css";

export const Form = ({ listTransactions, setListTransactions }) => {
  const [form, setForm] = useState({
    title: "",
    value: "",
    valueType: "entrada",
  });

  const submit = (event) => {
    event.preventDefault();
    if (form.title !== "" && form.value !== "") {
      setListTransactions([...listTransactions, form]);
      setForm({
        title: "",
        value: "",
        valueType: "entrada",
      });
    } else {
      alert("Algum campo não foi preenchido");
    }
  };

  return (
    <form className="form__container" onSubmit={submit}>
      <div className="form__box">
        <label className="form__title" htmlFor="description">
          Descrição
        </label>
        <input
          className="form__input"
          type="text"
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
          placeholder="Digite aqui sua descrição"
        ></input>
        <p className="form__paragraph">Ex: Compra de roupas</p>
      </div>
      <div className="form__valueBox">
        <div className="inputValueNumber__box">
          <label className="inputValueNumber__title" htmlFor="value">
            Valor
          </label>
          <div className="inputValueNumber__container">
            <input
              className="inputValueNumber__input"
              type="number"
              value={form.value}
              onChange={(event) =>
                setForm({ ...form, value: event.target.value })
              }
              placeholder="1"
            />
            <p className="inputValueNumber__paragraph">R$</p>
          </div>
        </div>
        <div className="inputSelect__container">
          <h1 className="inputSelect__title">Tipo de Valor</h1>
          <select
            className="inputSelect__select"
            value={form.valueType}
            onChange={(event) =>
              setForm({ ...form, valueType: event.target.value })
            }
          >
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
        </div>
      </div>
      <button className="form__button" type="submit">
        Inserir Valor
      </button>
    </form>
  );
};
