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

export default function InventoryForm({inventory,inventoryId,handleNewSumbit,handleEditSumbit,errObj,warehouseNames}){
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
                    </Label>
                </FormGridLeft>
                <FormGridSeprator></FormGridSeprator>
                <FormGridRight>
                    <Title title={"Item Availability"}></Title>
                    <Label labelTxt={"Status"}>
                        <input type="radio" id="contactChoice1"
                        name="invrStat" value="In Stock" />
                        <label for="contactChoice1">In Stock</label>
                    
                        <input type="radio" id="contactChoice2"
                        name="invrStat" defaultChecked={false} value="Out of Stock"/>
                        <label for="contactChoice2" >Out of Stock</label> 
                    </Label>
                    <Label labelTxt={"Quantity"}>
                        <Input  name={"invrQuan"} errObj={errObj} defaultValue={""}></Input>
                    </Label>
                   <Label labelTxt={"Wearhouses"}>
                        {warehouseNames && <select name="wrhsCats" className="frmgrid__select" defaultValue={""}>
                                <option value="">Please Select</option>
                                {warehouseNames.map((ele,idx)=>{
                                    console.log(ele)
                                    return <option key={idx} value={`${ele}`}>{ele}</option>
                                })}
                            </select>}
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
        let statusOFStatus = convertInStockFormatFromStringToBoolean();
            function convertInStockFormatFromStringToBoolean(){
                
                    if(inventory.status==="In Stock"){
                        console.log("true")
                        return true;
                    }else{
                        console.log("false")
                        return false;
                    }   
            }
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
                        <textarea name="invrTxt" id="" cols="30" rows="10" class="frmgrid__inpttxt" placeholder='' defaultValue={inventory.description}></textarea>
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
                        name="contact" defaultChecked={statusOFStatus}/>
                        <label for="contactChoice1">In Stock</label>
                        <input type="radio" id="contactChoice2"
                        name="contact" defaultChecked={!statusOFStatus}/>
                        <label for="contactChoice2" >Out of Stock</label> 
                    </Label>
                   <Label labelTxt={"Wearhouses"}>
                        {warehouseNames && <select name="wrhsCats" className="frmgrid__select" defaultValue={""}>
                                <option value="">Please Select</option>
                                {warehouseNames.map((ele,idx)=>{
                                    return <option key={idx} value={ele}>{ele}</option>
                                })}
                            </select>}
                   </Label>
                </FormGridRight>
                </FormBody>
                <FormFooter>
                    <CancelButton cancelLink={'/warehouses'}></CancelButton>
                    <SumbitButton activeId={inventoryId} buttonText={'Inventory'}></SumbitButton>
                </FormFooter>
            </FormGrid>
            </>
        );

    }   
}