import aud from "@/assets/icons/cyrrencyFlags/AUD.svg";
import cad from "@/assets/icons/cyrrencyFlags/CAD.svg";
import chf from "@/assets/icons/cyrrencyFlags/CHF.svg";
import cny from "@/assets/icons/cyrrencyFlags/CNY.svg";
import eur from "@/assets/icons/cyrrencyFlags/EUR.svg";
import gbp from "@/assets/icons/cyrrencyFlags/GBP.svg";
import hkd from "@/assets/icons/cyrrencyFlags/HKD.svg";
import inr from "@/assets/icons/cyrrencyFlags/INR.svg";
import jpy from "@/assets/icons/cyrrencyFlags/JPY.svg";
import nzd from "@/assets/icons/cyrrencyFlags/NZD.svg";
import pln from "@/assets/icons/cyrrencyFlags/PLN.svg";
import rub from "@/assets/icons/cyrrencyFlags/RUB.svg";
import uah from "@/assets/icons/cyrrencyFlags/UAH.svg";
import usd from "@/assets/icons/cyrrencyFlags/USD.svg";

const currencies = [
  {
    iso_code: "EUR",
    icon: eur,
    name: "Euro",
    symbol: "€",
  },
  {
    iso_code: "USD",
    icon: usd,
    name: "United States Dollar",
    symbol: "$",
  },
  {
    iso_code: "UAH",
    icon: uah,
    name: "Ukrainian Hryvnia",
    symbol: "₴",
  },

  {
    iso_code: "RUB",
    icon: rub,
    name: "Russian Ruble",
    symbol: "₽",
  },
  {
    iso_code: "GBP",
    icon: gbp,
    name: "British Pound",
    symbol: "£",
  },
  {
    iso_code: "CAD",
    icon: cad,
    name: "Canadian Dollar",
    symbol: "$",
  },
  {
    iso_code: "INR",
    icon: inr,
    name: "Indian Rupee",
    symbol: "₹",
  },
  {
    iso_code: "JPY",
    icon: jpy,
    name: "Japanese Yen",
    symbol: "¥",
  },
  {
    iso_code: "AUD",
    icon: aud,
    name: "Australian Dollar",
    symbol: "$",
  },
  {
    iso_code: "CHF",
    icon: chf,
    name: "Swiss Franc",
    symbol: "CHF",
  },
  {
    iso_code: "CNY",
    icon: cny,
    name: "Chinese Renminbi Yuan",
    symbol: "¥",
  },
  {
    iso_code: "HKD",
    icon: hkd,
    name: "Hong Kong Dollar",
    symbol: "$",
  },
  {
    iso_code: "PLN",
    icon: pln,
    name: "Polish Złoty",
    symbol: "zł",
  },
  {
    iso_code: "NZD",
    icon: nzd,
    name: "New Zealand Dollar",
    symbol: "$",
  },
];

export default currencies;
