import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Button } from 'react-bootstrap'
import Navigationbar from './components/Navigationbar';
import FeedEntry from './components/Feed';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <FeedEntry />
      
    </div>
  );
}

export default App;
