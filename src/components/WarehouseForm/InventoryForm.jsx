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
    const [newStatus,setNewStatus] = useState(false)
    const [editStatus,setEditStatus] = useState(false)
    const [wrhsCatName,setwrhsCatName] = useState("")
    const [inventoryCat,setInventoryCat] = useState("")
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
    function changeWrhsName(e){
        setwrhsCatName(e.target.value)
    }
    function changeInventoryCat(e){
        setInventoryCat(e.target.value)
    }
    useEffect(
        function(){
            if(inventory && inventory.status==="In Stock"){
                setEditStatus(true)
            }else{
                setEditStatus(false)
            }
            if(inventory){
                setwrhsCatName(inventory.warehouseName)
            }
            if(inventory){
                setInventoryCat(inventory.category)
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
                        <textarea name="invrDesc" id="" cols="30" rows="10" className={errObj["invrDesc"] ? `frmgrid__inpttxt frmgrid__inpttxt--err`:`frmgrid__inpttxt` } placeholder='' defaultValue={""}></textarea>
                        <ErrorSpan errObj={errObj} name={'invrDesc'}></ErrorSpan>
                    </Label>
                    <Label labelTxt={"Category"}> 
                        <select name="invrCats" className={errObj["invrCats"] ? `frmgrid__select frmgrid__select--err`:`frmgrid__select` }>
                            <option value="">Please Select</option>
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
                    <Label labelTxt={"Status"}>
                        <div>
                            <input type="radio" id="contactChoice1"
                            name="invrStat" value="In Stock" onChange={handleChange}/>
                            <label htmlFor="contactChoice1" className="frmgrid__radio">In Stock</label>
                            <input type="radio" id="contactChoice2"
                            name="invrStat" defaultChecked={true} value="Out of Stock" onChange={handleChange}/>
                            <label htmlFor="contactChoice2">Out of Stock</label>  
                        </div>
                    </Label>
                   {newStatus && 
                        <div className='frmgrid__inpt-quant'>
                            <Label labelTxt={"Quantity"}>
                            <Input name={"invrQuan"} errObj={errObj} defaultValue={""}></Input>
                            </Label>
                        </div>
                    }
                   <Label labelTxt={"Wearhouses"}>
                        {warehouseNames && <select name="wrhsCats" className={errObj["wrhsCats"] ? `frmgrid__select frmgrid__select--err`:`frmgrid__select` } defaultValue={""}>
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
                    <CancelButton cancelLink={'/inventory'}></CancelButton>
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
                        <textarea name="invrDesc" id="" cols="30" rows="10" className="frmgrid__inpttxt" placeholder='' defaultValue={inventory.description}></textarea>
                        <ErrorSpan errObj={errObj}></ErrorSpan>
                    </Label>
                    <Label labelTxt={"Category"}> 
                        <select name="invrCats" className={errObj["invrCats"] ? `frmgrid__select frmgrid__select--err`:`frmgrid__select` } value={inventoryCat} onChange={changeInventoryCat}>
                            <option value="">Please Select</option>
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
                    <Label labelTxt={"Status"}>
                        <div>
                        <input type="radio" id="contactChoice1"
                        name="invrStat" defaultChecked={editStatus} onClick={handleEditChange}/>
                        <label htmlFor="contactChoice1" className="frmgrid__radio">In Stock</label>
                        <input type="radio" id="contactChoice2"
                        name="invrStat" defaultChecked={!editStatus} onClick={handleEditChange}/>
                        <label htmlFor="contactChoice2" >Out of Stock</label> 
                        </div>
                        
                    </Label>
                   {editStatus &&  <Label labelTxt={"Quantity"}>
                        <Input  name={"invrQuan"} errObj={errObj} defaultValue={inventory.quantity}></Input>
                    </Label>}
                   <Label labelTxt={"Wearhouses"}>
                        {warehouseNames && <select name="wrhsCats" className={errObj["wrhsCats"] ? `frmgrid__select frmgrid__select--err`:`frmgrid__select` } value={wrhsCatName} onChange={changeWrhsName}>
                                <option value="">Please Select</option>
                                {warehouseNames.map((ele,idx)=>{
                                    return <option key={idx} value={ele}>{ele}</option>
                                })}
                            </select>}
                            <ErrorSpan errObj={errObj} name={'wrhsCats'}></ErrorSpan>
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