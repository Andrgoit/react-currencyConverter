import { useState } from "react";
import {
  Form,
  Title,
  AmountInput,
  ChangeButton,
  CurrencySelector,
  Footer,
  ConvertButton,
  ResultField,
  ChartField,
} from "@/components";

import currencies from "@/data/currencies";
import convertRequest from "@/api/convertRequest";
import requestForChart from "@/api/requestForChart";

import "./index.css";

function App() {
  const [amount, setAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState(null);
  const [convertTo, setConvertTo] = useState(null);
  const [rate, setRate] = useState(0);
  const [chartData, setChartData] = useState([]);

  const isDisabled = amount && convertFrom && convertTo;

  const amountChanger = (amount) => {
    setAmount(amount);
  };

  // const fromWeek = () => {
  //   const date = new Date();
  //   date.setDate(date.getDate() - 7);
  //   return date.toISOString().split("T")[0];
  // };

  const fromMonth = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    return date.toISOString().split("T")[0];
  };

  const selectedChanger = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
  };

  const convertation = async () => {
    const base = convertFrom.value;
    const quote = convertTo.value;
    const fromDate = fromMonth();

    try {
      const { rate } = await convertRequest(base, quote);
      setRate(rate);

      const data = await requestForChart(base, quote, fromDate);
      setChartData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <Form>
        <Title title="Currency converter" />
        <AmountInput amountChange={amountChanger} amount={amount} />
        <CurrencySelector
          currencies={currencies}
          title="From"
          selectedCurrency={convertFrom}
          setSelectedCurrency={setConvertFrom}
        />
        <ChangeButton onClick={selectedChanger} />
        <CurrencySelector
          currencies={currencies}
          title="To"
          selectedCurrency={convertTo}
          setSelectedCurrency={setConvertTo}
        />
        <ConvertButton disabled={isDisabled} onClick={convertation} />
        <ResultField
          convertFrom={convertFrom}
          convertTo={convertTo}
          rate={rate}
          amount={amount}
        />
        <ChartField chartData={chartData} />
        <Footer />
      </Form>
    </main>
  );
}

export default App;
