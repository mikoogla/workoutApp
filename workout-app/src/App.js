import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogin from './components/UserLogin/UserLogin';

let value = 1;

function changeValue(){
  value = 2*value;
  console.log(value);
  document.getElementById("a").textContent = value;
  }

function App() {
  return (
    <div className="App"> 
    <button id="a" onClick={changeValue}>Guzik</button>
    <LandingPage />
    <UserLogin/>
    <Dashboard/>
    </div>
  );
}

export default App;
