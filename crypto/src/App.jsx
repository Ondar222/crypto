import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import { getCoins } from "./api/api";

function App() {
  const [balance, setBalance] = useState(15000);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      // setCoins[data.coins];
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Main balance={balance} setBalance={setBalance} />
    </>
  );
}

export default App;
