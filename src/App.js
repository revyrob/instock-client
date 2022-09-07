import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Details from './components/Details/Details';
import Warehouses from './pages/Warehouses/Warehouses';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/warehouses" element={<Warehouses />} />
        {/* <Route path="/Warehouse/:id" element={<WareHouses />} />
        <Route path="/Warehouse/add" element={<WareHouses />} />
        <Route path="/Warehouse/:id/edit" element={<WareHouses />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Inventory/:id" element={<Inventory />} />
        <Route path="/Inventory/add" element={<Inventory />} />
        <Route path="/Inventory/:id/edit" element={<Inventory />} /> */}
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
