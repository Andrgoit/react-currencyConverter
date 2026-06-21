import Select from "react-select";
import styles from "@/components/CurrencySelector/CurrencySelector.module.css";

export default function CurrencySelector({
  currencies = [],
  title = "",
  selectedCurrency,
  setSelectedCurrency,
}) {
  const options = currencies.map(({ iso_code, icon, name }) => ({
    value: iso_code,
    label: name,
    icon,
  }));

  return (
    <div className={styles.selectorWrapper}>
      <span className={styles.selectorTitle}>{title}</span>
      <Select
        className={styles.selector}
        options={options}
        isSearchable={false}
        isClearable={false}
        value={selectedCurrency}
        onChange={setSelectedCurrency}
        placeholder="Select a currency, please..."
        formatOptionLabel={(option) => (
          <div className={styles.selectorItem}>
            <div className={styles.selectorImageWrapper}>
              <img
                src={option.icon}
                alt={option.label}
                className={styles.selectorImage}
              />
            </div>

            <span className={styles.selectorLabel}>
              {option.label} ({option.value})
            </span>
          </div>
        )}
      />
    </div>
  );
}
