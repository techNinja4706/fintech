import logo from './logo.svg';
import './App.css';
import axios from "axios"
function App() {
  // console.log("testing url", process.env.REACT_APP_URL)
  const send = async () => {
    const result = await axios({
      method: 'GET',
      url: 'https://fintech-p7f7.onrender.com'
      // url: 'https://fintech-p7f7.onrender.com'
      // url: 'http://localhost:3000/user'
    })

    console.log("Result", result)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <button onClick={send}>Send</button>
        </a>
      </header>
    </div>
  );
}

export default App;
