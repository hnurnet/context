import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import CartPage from './components/CartPage';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
     
    </div>
    </BrowserRouter>
  );
}

export default App;
