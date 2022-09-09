import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import InventoryDetails from './pages/InventoryDetails/InventoryDetails';
import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/warehouses" element={<Warehouses />}/>
        <Route path="/warehouses/:id" element={<WarehouseDetails />}/>
        <Route path="/warehouses/new" element={<EditWarehouse />}/>
        <Route path="/warehouses/:id/edit" element={<EditWarehouse />}/>
        {/* change the compoment when using the path
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/Inventory/:id" element={<Inventory />} />
        <Route path="/Inventory/new" element={<Inventory />} />
        <Route path="/Inventory/:id/edit" element={<Inventory />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
