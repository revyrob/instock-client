import './WarehouseForm.scss';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function WarehouseForm({warehouse,warehouseId}){
    let navigate = useNavigate();
    const [errObj, setErrobj]=useState({
        valid:true,
    })

    async function putEditedData(formObj){
        const {wrhsName,wrhsAdd,wrhsCity,wrhsCountry,cntcName,cntcPos,cntcPhn,cntcEmail} = formObj
        const resBody ={
            id: warehouseId,
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
        const {data} = await axios.post('http://localhost:8080/warehouse/',resBody)
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
        const {data} = await axios.post('http://localhost:8080/warehouse/',resBody)
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
        e.preventDefault()
        const formObj = e.target;
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
        <form className="frmgrid" onSubmit={warehouseId ? handleEditSumbit : handleNewSumbit}>
            <div className="frmgrid__body">
                <div className="frmgrid__left">
                    <p className="frmgrid__title">Warehouse Details</p>
                    <label className="frmgrid__lbl">
                        Warehouse Name
                        <input type="text" name="wrhsName" className={errObj.wrhsName ? 'frmgrid__inpt frmgrid__inpt-err' : 'frmgrid__inpt'} defaultValue={warehouse ? warehouse.name : ""}/>
                        <span className='frmgrid__errspn' style={errObj.wrhsName ? {"display":"block"}:{"display":"none"}}>{errObj.wrhsName}</span> 
                    </label>
                    <label className="frmgrid__lbl">
                        Street Address
                        <input type="text" name="wrhsAdd" className={errObj.wrhsAdd ? 'frmgrid__inpt frmgrid__inpt-err' : 'frmgrid__inpt'} defaultValue={warehouse ? warehouse.address : ""}/>
                        <span className='frmgrid__errspn' style={errObj.wrhsAdd ? {"display":"block"}:{"display":"none"}}>{errObj.wrhsAdd}</span> 
                    </label>
                    <label className="frmgrid__lbl">
                        City
                        <input type="text" name="wrhsCity" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.city : ""}/>
                        <span className='frmgrid__errspn' style={Object.hasOwn(errObj,'wrhsCity') ? {"display":"block"}:{"display":"none"}}>{errObj.wrhsCity}</span> 
                    </label>
                    <label className="frmgrid__lbl frmgrid__lbl--btm">
                        Country
                        <input type="text" name="wrhsCountry" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.country : ""}/>
                        <span className='frmgrid__errspn' style={Object.hasOwn(errObj,'wrhsCountry') ? {"display":"block"}:{"display":"none"}}>{errObj.wrhsCountry}</span> 
                    </label>
                </div>
                <hr className='frmgrid__seprator' />
                <div className="frmgrid__right">
                    <p className="frmgrid__title">Contact Details</p>
                    <label className="frmgrid__lbl">
                        Contact Name
                        <input type="text" name="cntcName" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.name : ""}/>
                        <span className='frmgrid__errspn' style={Object.hasOwn(errObj,'cntcName') ? {"display":"block"}:{"display":"none"}}>{errObj.cntcName}</span> 
                    
                    </label>
                    <label className="frmgrid__lbl">
                    Position
                        <input type="text" name="cntcPos" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.position : ""}/>
                        <span className='frmgrid__errspn' style={Object.hasOwn(errObj,'cntcPos') ? {"display":"block"}:{"display":"none"}}>{errObj.cntcPos}</span> 
                    </label>
                    <label className="frmgrid__lbl">
                    Phone Number
                        <input type="phone" name="cntcPhn" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.phone : ""}/>
                        <span className='frmgrid__errspn' style={Object.hasOwn(errObj,'cntcPhn') ? {"display":"block"}:{"display":"none"}}>{errObj.cntcPhn}</span> 
                    </label>
                    <label className="frmgrid__lbl frmgrid__lbl--btm">
                    Email
                        <input type="text" name="cntcEmail" className="frmgrid__inpt" defaultValue={warehouse ? warehouse.contact.email : ""}/>
                        <span className='frmgrid__errspn' style={errObj.cntcEmail ? {"display":"block"}:{"display":"none"}}>{errObj.cntcEmail}</span> 
                    </label>
                </div>
            </div>
            <div className="frmgrid__footer">
                <Link to={'/warehouses'} className='frmgrid__cancel'>Cancel</Link>
                <button type="submit" className='frmgrid__save'>{warehouseId ? `Save` : `+ Add Warehouse`}</button>
            </div>
        </form>
        </>
    )
}