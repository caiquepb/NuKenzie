import { useState } from "react";

import "./App.css";
import "./styles/reset.css";

import { FrontPage } from "./components/FrontPage";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { NoCard } from "./components/NoCard";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";

function App() {
  const [page, setPage] = useState(true);

  const [listTransactions, setListTransactions] = useState([]);

  return (
    <>
      {page ? (
        <FrontPage setPage={setPage} />
      ) : (
        <>
          <Header setPage={setPage} />
          <main className="mainPage__container">
            {listTransactions.length > 0 ? (
              <>
                <div className="mainPage__box">
                  <Form
                    listTransactions={listTransactions}
                    setListTransactions={setListTransactions}
                  />
                  <TotalMoney listTransactions={listTransactions} />
                </div>
                <List
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
              </>
            ) : (
              <>
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                />
                <NoCard />
              </>
            )}
          </main>
        </>
      )}
    </>
  );
}

export default App;
