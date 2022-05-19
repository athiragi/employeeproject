import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Employee from './component/Employee';
import Search from './component/Search';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Employee/>}/>
        <Route path="/search" exact element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
