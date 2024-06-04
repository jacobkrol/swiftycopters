import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState("");
  const [annual, setAnnual] = useState("");
  const [debt, setDebt] = useState("");
  const [isAnnual, setIsAnnual] = useState(false);

  const changeIncome = (evt: any) => {
    setIncome(evt.target.value);
    if (Number(evt.target.value) > 0) {
      console.log("setting false");
      setIsAnnual(false);
    }
  };

  const changeAnnual = (evt: any) => {
    setAnnual(evt.target.value);
    if (Number(evt.target.value) > 0) {
      console.log("setting true");
      setIsAnnual(true);
    }
  };

  const changeDebt = (evt: any) => {
    setDebt(evt.target.value);
  };

  const sc = useMemo(
    () =>
      Math.round(
        ((isAnnual ? Number(annual) / 12 : Number(income)) - Number(debt)) *
          0.0244 *
          100
      ) / 100,
    [income, debt]
  );

  return (
    <>
      <div>
        <h1>Swiftycopters</h1>
        <form>
          <div className="row">
            <div className="inputbox">
              <label htmlFor="income">Monthly Income:</label>
              <div id="incomebox" className="moneyinput">
                <span>$</span>
                <input
                  id="income"
                  type="number"
                  value={income}
                  onChange={changeIncome}
                  placeholder="0"
                  className={isAnnual ? "inactive" : ""}
                />
              </div>
            </div>
            <span>OR</span>
            <div className="inputbox">
              <label htmlFor="income">Annual Income:</label>
              <div id="annualincomebox" className="moneyinput">
                <span>$</span>
                <input
                  id="annualincome"
                  type="number"
                  value={annual}
                  onChange={changeAnnual}
                  placeholder="0"
                  className={isAnnual ? "" : "inactive"}
                />
              </div>
            </div>
          </div>
          <label id="debtlabel" htmlFor="debt">
            Monthly Debts:
          </label>
          <div id="debtbox" className="moneyinput">
            <span>$</span>
            <input
              id="debt"
              type="number"
              value={debt}
              onChange={changeDebt}
              placeholder="0"
            />
          </div>
          <p id="outputbox">
            🚁 is $ <span id="output">{Number(sc) ? sc : "..."}</span>
          </p>
        </form>
      </div>
      <footer>
        <a href="https://kroljs.com">Jacob Krol</a> &copy;{" "}
        {new Date().getFullYear().toString()}
      </footer>
    </>
  );
}

export default App;
