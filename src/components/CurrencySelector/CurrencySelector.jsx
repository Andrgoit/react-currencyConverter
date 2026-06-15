import { useState } from "react";
import Select from "react-select";
import styles from "@/components/CurrencySelector/CurrencySelector.module.css";

export default function CurrencySelector({ currencies = [], title = "" }) {
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const options = currencies.map(({ iso_code, icon, name }) => ({
    value: iso_code,
    label: name,
    icon,
  }));

  return (
    <div>
      <span>{title}</span>
      <Select
        options={options}
        value={selectedCurrency}
        onChange={setSelectedCurrency}
        formatOptionLabel={(option) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img src={option.icon} alt={option.label} width={20} height={20} />

            <span>{option.label}</span>
          </div>
        )}
      />
    </div>
  );
}
