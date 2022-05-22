import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage/LandingPage';
import UserLogin from './components/UserLogin/UserLogin';

function App() {
  return (
    <div className="App">
    <LandingPage />
    <UserLogin/>
    <Dashboard/>
    </div>
  );
}

export default App;
