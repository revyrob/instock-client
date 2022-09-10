import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryForm from "../../components/WarehouseForm/InventoryForm";
import './InventoryForm.scss'
import { useParams , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

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
            console.log("warehouse names list",data)
            setWarehouseNames(data)
        }catch(err){
            console.log(err)
        } 
    }
        
    async function getInventoryId(){
        try{
            const {data} = await axios.get(`http://localhost:8080/inventory/${inventoryId}`)
            console.log("data from api",data)
            setwarehouse(data)
        }catch(err){
            alert("invalid id")
        } 
    }
    
    async function putEditedData(formObj){
        const {wrhsName,wrhsAdd,wrhsCity,wrhsCountry,cntcName,cntcPos,cntcPhn,cntcEmail} = formObj
        const resBody ={
            id: inventoryId,
            name: wrhsName.value,
            address: wrhsAdd.value,
            city: wrhsCity.value,
            country: wrhsCountry.value,
            contact: {
              name: cntcName.value,
              position: cntcPos.value,
              phone:cntcPhn.value,
              email:cntcEmail.value
            }
        }
        const {data} = await axios.put(`http://localhost:8080/inventory/${inventoryId}`,resBody)
        navigate("/warehouses");
    }

    async function postData(formObj){
        const {wrhsName,wrhsAdd,wrhsCity,wrhsCountry,cntcName,cntcPos,cntcPhn,cntcEmail} = formObj
        const resBody ={
            name: wrhsName.value,
            address: wrhsAdd.value,
            city: wrhsCity.value,
            country: wrhsCountry.value,
            contact: {
              name: cntcName.value,
              position: cntcPos.value,
              phone:cntcPhn.value,
              email:cntcEmail.value
            }
        }
        const {data} = await axios.post('http://localhost:8080/inventory/',resBody)
        navigate("/warehouses");
    }

    function formValidation(formObj){
        const {invrName,invrDesc,invrCats,invrStat,invrQuan,wrhsCats} = formObj
        console.log(wrhsCats)
        //local err obj to collect err inputs 
        const localErrObj = {
            valid:false,
        }

       
        if(!invrName.value.replace(/\s/g, '').length){
            localErrObj[invrName.name] = "this field is required"
            localErrObj.valid = true;
        }

         //check if field is not empty
        if(!invrDesc.value.replace(/\s/g, '').length){
            localErrObj[invrDesc.name] = "this field is required"
            localErrObj.valid = true;
        }

         //check if field is not empty
        if(!invrCats.value.replace(/\s/g, '').length){
            localErrObj[invrCats.name] = "this field is required"
            localErrObj.valid = true;
        }
        if(!wrhsCats.value.replace(/\s/g, '').length){
            localErrObj[wrhsCats.name] = "this field is required"
            localErrObj.valid = true;
        }
        if(!invrQuan.value.replace(/\s/g, '').length){
            localErrObj[invrQuan.name] = "this field is required"
            localErrObj.valid = true;
        }else if(!Number(invrQuan.value)){
            localErrObj[invrQuan.name] = "this field is required"
        }
    
        if(localErrObj.valid){
            setErrobj(localErrObj)
        }else{
            setErrobj(errObj)
            return true;
        }
        return false;    
    }

    function handleEditSumbit(e){
        console.log("in edit")
        e.preventDefault()
        const formObj = e.target;
        console.log(typeof formObj)
        // const formObj = e.target;
        formValidation(formObj)
        // if(formValidation(formObj)){
        //     putEditedData(formObj)
        // }  
    }

    function handleNewSumbit(e){
        console.log("in sumbit")
        e.preventDefault()
        const formObj = e.target;
        formValidation(formObj)
        // if(formValidation(formObj)){
        //     postData(formObj)
        //     e.target.reset();
        // }
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