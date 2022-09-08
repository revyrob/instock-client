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
        <Route path="/warehouses" element={<Warehouses />} />

        <Route
          path="/warehouse/:id/edit"
          element={<EditWarehouse></EditWarehouse>}
        />
        <Route
          path="/warehouse/new"
          element={<EditWarehouse></EditWarehouse>}
        />
        <Route path="/warehouse/:id" element={<Warehouses />} />
        {/* <Route path="/Warehouse/:id" element={<WareHouses />} />
        <Route path="/Warehouse/add" element={<WareHouses />} />
        
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Inventory/:id" element={<Inventory />} />
        <Route path="/Inventory/add" element={<Inventory />} />
        <Route path="/Inventory/:id/edit" element={<Inventory />} /> */}
        <Route path="/warehousedetails" element={<WarehouseDetails />} />
        <Route path="/inventorydetails" element={<InventoryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
