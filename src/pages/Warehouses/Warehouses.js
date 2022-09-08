import "./Warehouses.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

function Warehouses() {
  //state for setting warehouse list
  const { REACT_APP_API_SERVER_URL } = process.env;
  const [warehouseList, setWarehouseList] = useState(null);
  //get warehouse list
  const getWarehouseList = () => {
    axios
      .get(`${REACT_APP_API_SERVER_URL}/warehouse`)
      .then((response) => {
        setWarehouseList(response.data);
      })
      .catch((err) => console.log(err));
  };
  //call getWarehouseList with useEffect
  useEffect(() => {
    getWarehouseList();
  }, []);

  return <WarehouseList warehouseList={warehouseList} />;
}

export default Warehouses;
