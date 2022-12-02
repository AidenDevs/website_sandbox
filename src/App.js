import './App.css';
import Header from './components/Header';
import SiteRouter from './components/SiteRouter'
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <SiteRouter></SiteRouter>
    </div>
  );
}

export default App;
