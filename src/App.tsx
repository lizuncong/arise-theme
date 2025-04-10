import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import styles from './index.module.less';
import './index.less';
function App() {
  const [count, setCount] = useState(0);
  const a = 1;

  useEffect(() => {
    console.log(a);
    console.log(count, a);
  }, [count]);

  return (
    <>
      <div className={styles.container}>
        <a className="dfd" href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
