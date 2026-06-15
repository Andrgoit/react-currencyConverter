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

import currencies from "./data/currencies";
import convertRequest from "@/data/api/convertRequest";

import "./index.css";

function App() {
  const { amount, setAmount } = useState(1);
  const { convertFrom, setConvertFrom } = useState(null);
  const { convertTo, setConvertTo } = useState(null);
  const { rate, setRate } = useState(0);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-br from-[#1CB5E0] to-[#000851]">
      <Form>
        <Title title="Currency converter" />
        <AmountInput />
        <CurrencySelector currencies={currencies} title="From" />
        <ChangeButton />
        <CurrencySelector currencies={currencies} title="To" />
        <ConvertButton />
        <ResultField />
        <Footer />
      </Form>
    </div>
  );
}

export default App;
