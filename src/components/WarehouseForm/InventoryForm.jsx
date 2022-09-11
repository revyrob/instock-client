import './WarehouseForm.scss';
import {Input} from './Input'
import {Title} from './Title'
import {FormGrid} from './FormGrid'
import {FormGridLeft} from './FormGridLeft'
import {FormGridSeprator} from './FormGridSeprator'
import {FormGridRight} from './FormGridRight'
import {FormFooter} from './FormFooter'
import {FormBody} from './FormBody'
import {CancelButton} from './CancelButton'
import {SumbitButton} from './SumbitButton'
import { Label } from './Label';
import { ErrorSpan } from './ErrorSpan';
import {useEffect, useState} from 'react'
export default function InventoryForm({inventory,inventoryId,handleNewSumbit,handleEditSumbit,errObj,warehouseNames}){
<<<<<<< HEAD
=======
    // console.log(inventory)
>>>>>>> develop
    const [newStatus,setNewStatus] = useState(false)
    const [editStatus,setEditStatus] = useState(false)

    function handleChange(e){
       if(e.target.value === "In Stock"){
        setNewStatus(true)
       }else{
        setNewStatus(false)
       }
    }

    function handleEditChange(e){
        if(e.target.value === "In Stock"){
            setEditStatus(true)
           }else{
            setEditStatus(false)
        }
    }
    
    useEffect(
        function(){
            if(inventory && inventory.status==="In Stock"){
                setEditStatus(true)
            }else{
                setEditStatus(false)
            }
        }
    ,[inventory])


    if(!inventory){
        return(
            <>
            <FormGrid activeId={inventoryId} handleEditSumbit={handleEditSumbit} handleNewSumbit={handleNewSumbit}>
                <FormBody>
                <FormGridLeft>
                    <Title title={"Item Details"}></Title>
                    <Label labelTxt={"Item Name"}>
                        <Input  name={"invrName"} errObj={errObj} defaultValue={""}></Input>
                    </Label>
                    <Label labelTxt={"Description"}>
                        <textarea name="invrDesc" id="" cols="30" rows="10" class="frmgrid__inpttxt" placeholder='' defaultValue={""}></textarea>
                        <ErrorSpan errObj={errObj} name={'invrDesc'}></ErrorSpan>
                    </Label>
                    <Label labelTxt={"Category"}> 
                        <select name="invrCats" className="frmgrid__select">
                            <option value="" selected>Please Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gear">Gear</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Health">Health</option>
                        </select>
                        <ErrorSpan errObj={errObj} name={'invrCats'}></ErrorSpan>
                    </Label>
                </FormGridLeft>
                <FormGridSeprator></FormGridSeprator>
                <FormGridRight>
                    <Title title={"Item Availability"}></Title>
                    <Label labelTxt={"Status"}> </Label> 
                        <input type="radio" id="contactChoice1"
                        name="invrStat" value="In Stock" onChange={handleChange}/>
                        <label for="contactChoice1">In Stock</label>
                        <input type="radio" id="contactChoice2"
                        name="invrStat" defaultChecked={true} value="Out of Stock" onChange={handleChange}/>
                        <label for="contactChoice2">Out of Stock</label> 
                    
                   {newStatus && <Label labelTxt={"Quantity"}>
                        <Input  name={"invrQuan"} errObj={errObj} defaultValue={""}></Input>
                    </Label>}
                   <Label labelTxt={"Wearhouses"}>
                        {warehouseNames && <select name="wrhsCats" className="frmgrid__select" defaultValue={""}>
                                <option value="">Please Select</option>
                                {warehouseNames.map((ele,idx)=>{
                                 
                                    return <option key={idx} value={`${ele}`}>{ele}</option>
                                })}
                            </select>}
                            <ErrorSpan errObj={errObj} name={'wrhsCats'}></ErrorSpan>
                   </Label>
                   
                </FormGridRight>
                </FormBody>
                <FormFooter>
                    <CancelButton cancelLink={'/warehouses'}></CancelButton>
                    <SumbitButton activeId={inventoryId} buttonText={'Inventory'}></SumbitButton>
                </FormFooter>
            </FormGrid>
            </>
        )
    }else{
        return (
            <>
            <FormGrid activeId={inventoryId} handleEditSumbit={handleEditSumbit} handleNewSumbit={handleNewSumbit}>
                <FormBody>
                <FormGridLeft>
                    <Title title={"Item Details"}></Title>
                    <Label labelTxt={"Item Name"}>
                        <Input  name={"invrName"} errObj={errObj} defaultValue={inventory.itemName}></Input>
                    </Label>
                    <Label labelTxt={"Description"}>
                        <textarea name="invrDesc" id="" cols="30" rows="10" class="frmgrid__inpttxt" placeholder='' defaultValue={inventory.description}></textarea>
                        <ErrorSpan errObj={errObj}></ErrorSpan>
                    </Label>
                    <Label labelTxt={"Category"}> 
                        <select name="invrCats" className="frmgrid__select" value={inventory.category}>
                            <option value="" selected>Please Select</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Gear">Gear</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Health">Health</option>
                        </select>
                    </Label>
                </FormGridLeft>
                <FormGridSeprator></FormGridSeprator>
                <FormGridRight>
                    <Title title={"Item Availability"}></Title>
                    <Label labelTxt={"Status"}>
                        <input type="radio" id="contactChoice1"
                        name="invrStat" defaultChecked={editStatus} onClick={handleEditChange}/>
                        <label for="contactChoice1">In Stock</label>
                        <input type="radio" id="contactChoice2"
                        name="invrStat" defaultChecked={!editStatus} onClick={handleEditChange}/>
                        <label for="contactChoice2" >Out of Stock</label> 
                    </Label>
                   {editStatus &&  <Label labelTxt={"Quantity"}>
                        <Input  name={"invrQuan"} errObj={errObj} defaultValue={inventory.quantity}></Input>
                    </Label>}
                   <Label labelTxt={"Wearhouses"}>
                        {warehouseNames && <select name="wrhsCats" className="frmgrid__select" defaultValue={inventory.warehouseName}>
                                <option value="">Please Select</option>
                                {warehouseNames.map((ele,idx)=>{
                                    return <option key={idx} value={ele}>{ele}</option>
                                })}
                            </select>}
                   </Label>
                </FormGridRight>
                </FormBody>
                <FormFooter>
                    <CancelButton cancelLink={'/inventory'}></CancelButton>
                    <SumbitButton activeId={inventoryId} buttonText={'Inventory'}></SumbitButton>
                </FormFooter>
            </FormGrid>
            </>
        );

    }   
}