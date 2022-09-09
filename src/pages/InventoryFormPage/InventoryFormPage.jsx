import PageHeader from "../../components/PageHeader/PageHeader";
import InventoryForm from "../../components/WarehouseForm/InventoryForm";
import './InventoryForm.scss'
import { useParams , useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function InventoryFormPage(){
    console.log("inventory")
    const [inventory, setwarehouse] = useState(null)
    const {id:inventoryId} =  useParams();
    let navigate = useNavigate();
    const [errObj, setErrobj]=useState({
        valid:true,
    })
    console.log("inventoryid",inventoryId)
    useEffect(function(){
        if(inventoryId){
           getWareHouseById()
        }
    },[inventoryId])
    console.log(inventoryId)
    async function getWareHouseById(){
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
        const {wrhsName,wrhsAdd,wrhsCity,wrhsCountry,cntcName,cntcPos,cntcPhn,cntcEmail} = formObj
        //local err obj to collect err inputs 
        const localErrObj = {
            valid:false,
        }

         //check if field is not empty
        if(!wrhsName.value.replace(/\s/g, '').length){
            localErrObj[wrhsName.name] = "this field is required"
            localErrObj.valid = true;
        }

         //check if field is not empty
        if(!wrhsAdd.value.replace(/\s/g, '').length){
            localErrObj[wrhsAdd.name] = "this field is required"
            localErrObj.valid = true;
        }

         //check if field is not empty
        if(!wrhsCity.value.replace(/\s/g, '').length){
            localErrObj[wrhsCity.name] = "this field is required"
            localErrObj.valid = true;
        }

         //check if field is not empty
        if(!wrhsCountry.value.replace(/\s/g, '').length){
            localErrObj[wrhsCountry.name] = "this field is required"
            localErrObj.valid = true;
        }

         //check if field is not empty
        if(!cntcName.value.replace(/\s/g, '').length){
            localErrObj[cntcName.name] = "this field is required"
            localErrObj.valid = true;
        }

        //check if field is not empty
        if(!cntcPos.value.replace(/\s/g, '').length){
            localErrObj[cntcPos.name] = "this field is required"
            localErrObj.valid = true;
        }

        //check if phone is empty or has number as input
        if(!cntcPhn.value.replace(/\s/g, '').length){
            localErrObj[cntcPhn.name] = "this field is required"
            localErrObj.valid = true;
            
        }else if(!Number(cntcPhn.value)){
            localErrObj[cntcPhn.name] = "please enter a number"
            localErrObj.valid = true;
        }else{

        }
        
        //check if email is not empty and has includes @
        if(!cntcEmail.value.replace(/\s/g, '').length){
            localErrObj[cntcEmail.name] = "this field is required"
            localErrObj.valid = true;
        }else if(!cntcEmail.value.includes('@')){
            localErrObj[cntcEmail.name] = "not valid email"
            localErrObj.valid = true;
        }else{

        }

        //set errObj state to local state depending on localErrObj valid property
        if(localErrObj.valid){
            setErrobj(localErrObj)
        }else{
            setErrobj(errObj)
            return true;
        }
        return false;    
    }

    function handleEditSumbit(e){
        console.log(e.target)
        e.preventDefault()
        const formObj = e.target;
        console.log(formValidation(formObj))
        if(formValidation(formObj)){
            putEditedData(formObj)
        }  
    }

    function handleNewSumbit(e){
        const formObj = e.target;
        e.preventDefault()
        if(formValidation(formObj)){
            postData(formObj)
            e.target.reset();
        }
    }


    return(
        <>  
            <div className="edit-wrhse">
                <PageHeader title={inventoryId? "Edit inventory":"Add New inventory"} backLink={'warehouses'}></PageHeader>
                <InventoryForm inventory={inventory} inventoryId={inventoryId} handleNewSumbit={handleNewSumbit} handleEditSumbit={handleEditSumbit} errObj={errObj} ></InventoryForm>
            </div>  
        </>  
    )
}