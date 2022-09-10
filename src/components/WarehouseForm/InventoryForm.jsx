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
    console.log("inventory", inventory)
    console.log("inventoryId", inventoryId)
    return(
        <>
        <FormGrid warehouseId={inventoryId} handleEditSumbit={handleEditSumbit} handleNewSumbit={handleNewSumbit}>
            <FormBody>
            <FormGridLeft>
                <Title title={"Item Details"}></Title>
                <Label labelTxt={"Item Name"}>
                    <Input  name={"invrName"} errObj={errObj} defaultValue={inventory ? inventory.itemName : ""}></Input>
                </Label>
                <Label labelTxt={"Description"}>
                    <textarea name="invrName" id="" cols="30" rows="10" class="frmgrid__inpttxt" placeholder='' defaultValue={inventory ? inventory.description : ""}></textarea>
                </Label>
                <Label labelTxt={"Category"}> 
                    <select name="invrCats" className="frmgrid__select" defaultValue={inventory ? inventory.category : ""}>
                    {!inventory && <option value="">Please Select</option>}
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
                  <input type="radio" id="css" name="fav_language" value="CSS"/>
                  <label for="css">CSS</label>
                  <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                  <label for="javascript">JavaScript</label>
                </Label>
               
               {warehouseNames && <select name="wrhsCats" className="frmgrid__select" defaultValue={inventory ? inventory.warehouseNames : ""}>
                    {!inventory && <option value="">Please Select</option>}
                    {warehouseNames.map((ele)=>{
                        console.log(ele)
                        return <option value={ele}>{ele}</option>
                    })}
                </select>}
            </FormGridRight>
            </FormBody>
            <FormFooter>
                <CancelButton cancelLink={'/warehouses'}></CancelButton>
                <SumbitButton warehouseId={inventoryId} buttonText={'Inventory'}></SumbitButton>
            </FormFooter>
        </FormGrid>
        </>
    )
}