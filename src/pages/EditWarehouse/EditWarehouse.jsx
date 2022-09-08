import PageHeader from "../../components/PageHeader/PageHeader";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import './EditWarehouse.scss'

import {  useParams } from 'react-router-dom'
import {  useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
export default function EditWarehouse(){
    const [warehouse, setwarehouse] = useState(null)
    const {id:warehouseId} =  useParams();
    useEffect(function(){
        if(warehouseId){
           getWareHouseById()
        }
    },[warehouseId])

    async function getWareHouseById(){
        try{
            const {data} = await axios.get(`http://localhost:8080/warehouse/${warehouseId}`)
            console.log(data)
            setwarehouse(data)
        }catch(err){
            console.log(err)
        } 
    }
    
    return(
        <>  
        {/* <PageHeader title={warehouseId? "Edit Warehouse":"Add New Warehouse"} backLink={'warehouses'}></PageHeader> */}
            <div className="edit-wrhse">
                <PageHeader title={warehouseId? "Edit Warehouse":"Add New Warehouse"} backLink={'warehouses'}></PageHeader>
                <WarehouseForm warehouse={warehouse} warehouseId={warehouseId}></WarehouseForm>
            </div>  
        </>  
    )
}