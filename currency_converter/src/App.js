import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [value, setValue] = useState(0);
  const [sourceCurrency, setSourceCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [calculatedValue, setCalculatedValue] = useState(0);
  const [error, setError] = useState("");

  function handleSetValue(value) {
    setValue(+value);
  }

  function handleSetSourceCurrency(cur) {
    setSourceCurrency(cur);
  }

  function handleSetTargetCurrency(cur) {
    setTargetCurrency(cur);
  }

  useEffect(
    function () {
      const controller = new AbortController();
      async function convert() {
        try {
          setError("");
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${value}&from=${sourceCurrency}&to=${targetCurrency}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("failed to convert currency");
          const data = await res.json();
          setCalculatedValue(data.rates[targetCurrency]);
        } catch (err) {
          setError(err.message);
          console.log(err);
        }
      }
      if (value <= 0) return;
      if (sourceCurrency === targetCurrency) {
        setCalculatedValue(value);
        return;
      }
      convert();
      return controller.abort();
    },
    [value, sourceCurrency, targetCurrency]
  );

  return (
    <div>
      <input type="text" onChange={(e) => handleSetValue(e.target.value)} />
      <select
        onChange={(e) => handleSetSourceCurrency(e.target.value)}
        value={sourceCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(e) => handleSetTargetCurrency(e.target.value)}
        value={targetCurrency}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {error ||
          `${value} ${sourceCurrency} = ${calculatedValue} ${targetCurrency}`}
      </p>
    </div>
  );
}
