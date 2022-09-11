import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryForm from "../../components/WarehouseForm/InventoryForm";
import './InventoryForm.scss'
import { useParams , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import {formValidationInventory} from '../../util/util'
export default function InventoryFormPage(){
    const [inventory, setwarehouse] = useState(null);
    const [warehouseNames, setWarehouseNames] = useState(null);
    const {id:inventoryId} =  useParams();

    let navigate = useNavigate();
    const [errObj, setErrobj]=useState({
        valid:true,
    })

    useEffect(function(){
        getWarehouseNames()
        if(inventoryId){
            getInventoryId()
        }
    },[inventoryId])

    async function getWarehouseNames(){
        try{
            const {data} = await axios.get(`http://localhost:8080/warehouse/names`)
            setWarehouseNames(data)
        }catch(err){
            console.log(err)
        } 
    }
        
    async function getInventoryId(){
        try{
            const {data} = await axios.get(`http://localhost:8080/inventory/${inventoryId}`)
            setwarehouse(data)
        }catch(err){
            alert("invalid id")
        } 
    }
    
    async function putEditedData(formObj){
        const {invrName,invrDesc,invrCats,invrStat,invrQuan,wrhsCats} = formObj
        const resBody ={
            id:inventoryId,
            warehouseID:inventory.warehouseID,
            warehouseName:wrhsCats.value,
            itemName: invrName.value,
            description: invrDesc.value,
            category: invrCats.value,
            status: invrStat.value,
            quantity:invrQuan ? invrQuan.value : "0",
        }
        const {data} = await axios.put(`http://localhost:8080/inventory/`,resBody)
        navigate("/inventory");
    }

    async function postData(formObj){
        const {invrName,invrDesc,invrCats,invrStat,invrQuan,wrhsCats} = formObj;
        const resBody ={
            warehouseName:wrhsCats.value,
            itemName: invrName.value,
            description: invrDesc.value,
            category: invrCats.value,
            status: invrStat.value,
            quantity:invrQuan ? invrQuan.value : "0",
        }
        const {data} = await axios.post('http://localhost:8080/inventory/',resBody)
        navigate("/inventory");
    }


    function handleEditSumbit(e){
        e.preventDefault()
        const formObj = e.target;
        let errObjLocal = formValidationInventory(formObj)
        if(errObjLocal){
            setErrobj(errObjLocal)
        }else{
            setErrobj(errObj)
            putEditedData(formObj)
        }
    }

    function handleNewSumbit(e){
        e.preventDefault()
        const formObj = e.target;
        let errObjLocal = formValidationInventory(formObj)
        if(errObjLocal){
            setErrobj(errObjLocal)
        }else{
            setErrobj(errObj)
            postData(formObj)
        }
    }


    return(
        <>  
            <div className="edit-wrhse">
                <PageHeader title={inventoryId? "Edit inventory":"Add New inventory"} backLink={`../../inventory`}></PageHeader>
                <InventoryForm inventory={inventory} inventoryId={inventoryId} handleNewSumbit={handleNewSumbit} handleEditSumbit={handleEditSumbit} errObj={errObj} warehouseNames={warehouseNames}></InventoryForm >
            </div>  
        </>  
    )
}