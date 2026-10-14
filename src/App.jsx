
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);
  const [history, setHistory] = useState([]);


  function increment() {
    if (count < 100) {
      setCount(count + 1);
    }
  }


  function decrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function reset() {
    setCount(0);
  }

  function generateRandomNumber() {
    const number = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(number);
    setHistory((previous) => [number, ...previous].slice(0, 5));
  }

  return (
    <main className="app">
      <header className="hero">
        <p className="tagline">✦ YOUR LITTLE DIGITAL PLAYGROUND ✦</p>
        <h1>Click<span>zy</span> 🎮</h1>
        <p className="subtitle">
          Click it. Count it. Randomize it. Let the fun begin!
        </p>
      </header>

      <section className="dashboard">
        <article className="card counter-card">
          <div className="card-heading">
            <span className="emoji">🔢</span>
            <div>
              <h2>Counter Carnival</h2>
              <p>Every click counts!</p>
            </div>
          </div>

          <div className="counter-circle">
            <span>{count}</span>
          </div>

          {count === 0 ? (
            <p className="message warning">
              🛑 Minimum limit reached
            </p>
          ) : count === 100 ? (
            <p className="message warning">
              🎯 Maximum limit reached!
            </p>
          ) : (
            <p className="message success">
              🎉 You're on a roll!
            </p>
          )}


          <div className="button-group">
           <button className="btn decrease" onClick={decrement} disabled={count === 0}>
  − Decrease
</button>
            <button className="btn increase" onClick={increment} disabled={count === 100} >
  + Increase
</button>
          </div>

          <button className="btn reset" onClick={reset}>
            ↻ Reset Counter
          </button>
        </article>

        <article className="card random-card">
          <div className="card-heading">
            <span className="emoji">🎲</span>
            <div>
              <h2>Lucky Number Lab</h2>
              <p>Let chance surprise you!</p>
            </div>
          </div>

          <div className="random-display">
            {randomNumber === null ? (
              <div>
                <span className="question">?</span>
                <p>No number generated yet</p>
              </div>
            ) : (
              <div>
                <span className="result-number">{randomNumber}</span>
                <p>
                  {randomNumber === 7
                    ? "🍀 Lucky seven!"
                    : "✨ Your new number is here!"}
                </p>
              </div>
            )}
          </div>

          <button className="btn generate" onClick={generateRandomNumber}>
            🎲 Generate Random Number
          </button>

          <div className="history-heading">
            <h3>🪄 Recent Numbers</h3>
            <button className="clear" onClick={() => setHistory([])} > Clear
            </button>
          </div>

          <div className="history">
            {history.length === 0 ? (
              <p className="empty-history">Your numbers will appear here!</p>
            ) : (
              history.map((number, index) => (
                <span className="number-chip" key={index}>
                  {number}
                </span>
              ))
            )}
          </div>
        </article>
      </section>

      <footer>
        MADE WITH 💜 AND REACT <span>✦</span> POWERED BY useState
      </footer>
    </main>
  );
}

export default App;
