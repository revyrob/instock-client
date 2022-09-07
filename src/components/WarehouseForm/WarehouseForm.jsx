import './WarehouseForm.scss';
// import {  useParams } from 'react-router-dom'
// import {  useState } from 'react'
// import { useEffect } from 'react';
// import axios from 'axios';

import PageHeader from '../PageHeader/PageHeader'
import { useState } from 'react';

export default function WarehouseForm({warehouse,warehouseId}){
    // const [warehouse, setwarehouse] = useState(null)
    // const {id:warehouseId} =  useParams();
    // useEffect(function(){
    //     if(warehouseId){
    //        getWareHouseById()
    //     }
    // },[warehouseId])

    // async function getWareHouseById(){
    //     const {data} = await axios.get(`http://localhost:8080/warehouse/${warehouseId}`)
    //     console.log(data)
    //     setwarehouse(data)
    // }
    // function handleEditSumbit(e){
    //     e.preventDefault()
    //     console.log("edit")
    // }

    // function handleNewSumbit(e){
    //     e.preventDefault()
    //     console.log("new")
    // }

    const [validObj, setValidObj]=useState({
        validate:true,
    })

    function formValidation(formObj){
        const {wrhsName,wrhsAdd,wrhsCity,wrhsCountry,cntcName,cntcPos,cntcPhn,cntcEmail} = formObj
        console.log(wrhsCity)
        const obj = {
            validate:false,
        }
        if(!wrhsName.value.replace(/\s/g, '').length){
            obj[wrhsName.name] = "this field is required"
            obj.validate = true;
        }
        if(!wrhsAdd.value.replace(/\s/g, '').length){
            obj[wrhsAdd.name] = "this field is required"
            obj.validate = true;
        }
        if(!wrhsCity.value.replace(/\s/g, '').length){
            obj[wrhsCity.name] = "this field is required"
            obj.validate = true;
        }
        if(!wrhsCountry.value.replace(/\s/g, '').length){
            obj[wrhsCountry.name] = "this field is required"
            obj.validate = true;
        }
        if(!cntcName.value.replace(/\s/g, '').length){
            obj[cntcName.name] = "this field is required"
            obj.validate = true;
        }
        if(!cntcPos.value.replace(/\s/g, '').length){
            obj[cntcPos.name] = "this field is required"
            obj.validate = true;
        }
        if(!cntcPhn.value.replace(/\s/g, '').length){
            obj[cntcPhn.name] = "this field is required"
            obj.validate = true;
        }
        if(!cntcEmail.value.replace(/\s/g, '').length){
            obj[cntcEmail.name] = "this field is required"
            obj.validate = true;
        }else if(!cntcEmail.value.includes('@')){
            obj[cntcEmail.name] = "not valid email"
            obj.validate = true;
        }

        console.log(obj)
        setValidObj(obj)
    }

    function handleEditSumbit(e){
        e.preventDefault()
        const formObj = e.target;
        console.log("edit")
        formValidation(formObj)
    }

    function handleNewSumbit(e){
        const formObj = e.target;
        e.preventDefault()
        formValidation(formObj)
        console.log("new")
    }

    return(
        <>
        <form className="frmgrid" onSubmit={warehouseId ? handleEditSumbit : handleNewSumbit}>
            <div className="frmgrid__body">
                <div className="frmgrid__left">
                    <p className="frmgrid__title">Warehouse Details</p>
                    <label className="frmgrid__lbl">
                        Warehouse Name
                        <input type="text" name="wrhsName" className={Object.hasOwn(validObj,'wrhsName') ? 'frmgrid__inpt frmgrid__inpt-err' : 'frmgrid__inpt'} defaultValue={warehouse ? warehouse.name : ""}/>
                        {Object.hasOwn(validObj,'wrhsName') && 
                            <span className='frmgrid__errspn'>{validObj.wrhsName}</span> 
                        }
                    </label>
                    <label className="frmgrid__lbl">
                        Street Address
                        <input type="text" name="wrhsAdd" className={Object.hasOwn(validObj,'wrhsAdd') ? 'frmgrid__inpt frmgrid__inpt-err' : 'frmgrid__inpt'} defaultValue={warehouse ? warehouse.address : ""}/>
                        {Object.hasOwn(validObj,'wrhsAdd') && 
                            <span className='frmgrid__errspn'>{validObj.wrhsName}</span> 
                        }
                    </label>
                    <label className="frmgrid__lbl">
                        City
                        <input type="text" name="wrhsCity" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.city : ""}/>
                        {Object.hasOwn(validObj,'wrhsCity') && 
                            <span className='frmgrid__errspn'>{validObj.wrhsCity}</span> 
                        }
                    </label>
                    <label className="frmgrid__lbl">
                        Country
                        <input type="text" name="wrhsCountry" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.country : ""}/>
                        {Object.hasOwn(validObj,'wrhsCountry') && 
                            <span className='frmgrid__errspn'>{validObj.wrhsCountry}</span> 
                        }
                    </label>
                </div>
                <hr className='frmgrid__seprator' />
                <div className="frmgrid__right">
                    <p className="frmgrid__title">Contact Details</p>
                    <label className="frmgrid__lbl">
                        Contact Name
                        <input type="text" name="cntcName" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.name : ""}/>
                        {Object.hasOwn(validObj,'cntcName') && 
                            <span className='frmgrid__errspn'>{validObj.cntcName}</span> 
                        }
                    </label>
                    <label className="frmgrid__lbl">
                    Position
                        <input type="text" name="cntcPos" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.position : ""}/>
                        {Object.hasOwn(validObj,'cntcPos') && 
                            <span className='frmgrid__errspn'>{validObj.cntcPos}</span> 
                        }
                    </label>
                    <label className="frmgrid__lbl">
                    Phone Number
                        <input type="phone" name="cntcPhn" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.phone : ""}/>
                        {Object.hasOwn(validObj,'cntcPhn') && 
                            <span className='frmgrid__errspn'>{validObj.cntcPhn}</span> 
                        }
                    </label>
                    <label className="frmgrid__lbl">
                    Email
                        <input type="text" name="cntcEmail" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.email : ""}/>
                        {Object.hasOwn(validObj,'cntcEmail') && 
                            <span className='frmgrid__errspn'>{validObj.cntcEmail}</span> 
                        }
                    </label>
                </div>
            </div>
            <div className="frmgrid__footer">
                <button type="button" className='frmgrid__cancel'>Cancel</button>
                <button type="submit" className='frmgrid__save'>{warehouseId ? `Save` : `add`}</button>
            </div>
        </form>
        </>
    )
}