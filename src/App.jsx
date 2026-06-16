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
} from "@/components";

import currencies from "@/data/currencies";
import convertRequest from "@/api/convertRequest";

import "./index.css";

function App() {
  const [amount, setAmount] = useState("");
  const [convertFrom, setConvertFrom] = useState(null);
  const [convertTo, setConvertTo] = useState(null);
  const [rate, setRate] = useState(0);

  const isDisabled = amount && convertFrom && convertTo;

  const amountChanger = (amount) => {
    setAmount(amount);
  };

  const selectedChanger = () => {
    setConvertFrom(convertTo);
    setConvertTo(convertFrom);
  };

  const convertation = async () => {
    const base = convertFrom.value;
    const quote = convertTo.value;

    try {
      const { rate } = await convertRequest(base, quote);
      setRate(rate);
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
        <Footer />
      </Form>
    </main>
  );
}

export default App;
