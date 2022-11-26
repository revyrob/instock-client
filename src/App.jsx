import './App.scss';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Warehouses from './pages/Warehouses/Warehouses';
import WarehouseDetails from './pages/WarehouseDetails/WarehouseDetails';
import InventoryDetails from './pages/InventoryDetails/InventoryDetails';
import InventoryItem from './pages/InventoryItem/InventoryItem';
import EditWarehouse from './pages/EditWarehouse/EditWarehouse';
import InventoryFormPage from './pages/InventoryFormPage/InventoryFormPage';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Warehouses />} />

        <Route path="/warehouses" element={<Warehouses />} />
        <Route path="/warehouses/:id" element={<WarehouseDetails />} />
        <Route path="/warehouses/new" element={<EditWarehouse />} />
        <Route path="/warehouses/:id/edit" element={<EditWarehouse />} />

        <Route path="/inventory" element={<InventoryDetails />} />
        <Route path="/inventory/:id" element={<InventoryItem />} />

        <Route path="/inventory/new" element={<InventoryFormPage />} />
        <Route path="/inventory/:id/edit" element={<InventoryFormPage />} />

        <Route path="/warehousedetails" element={<WarehouseDetails />} />
        <Route path="/inventorydetails" element={<InventoryDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
