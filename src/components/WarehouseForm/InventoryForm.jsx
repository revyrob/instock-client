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

export default function InventoryForm({warehouse,warehouseId,handleNewSumbit,handleEditSumbit,errObj}){
    
    return(
        <>
        <FormGrid warehouseId={warehouseId} handleEditSumbit={handleEditSumbit} handleNewSumbit={handleNewSumbit}>
            <FormBody>
            <FormGridLeft>
                <Title title={"Item Details"}></Title>
                <Label labelTxt={"Warehouse Name"}>
                    <Input  name={"wrhsName"} errObj={errObj} defaultValue={warehouse ? warehouse.name : ""}></Input>
                </Label>
            </FormGridLeft>
            <FormGridSeprator></FormGridSeprator>
            <FormGridRight>
                <Title title={"Item Availability"}></Title>
            </FormGridRight>
            </FormBody>
            <FormFooter>
                <CancelButton cancelLink={'/warehouses'}></CancelButton>
                <SumbitButton warehouseId={warehouseId}></SumbitButton>
            </FormFooter>
        </FormGrid>
           
        {/* <form className="frmgrid" onSubmit={warehouseId ? handleEditSumbit : handleNewSumbit}>
            <div className="frmgrid__body">
                <div className="frmgrid__left">
                    <Title title={"Warehouse Details"}></Title>
                    <Input labelTxt={"Warehouse Name"} name={"wrhsName"} errObj={errObj} warehouse={warehouse}></Input>
                    <Input labelTxt={"Street Address"} name={"wrhsAdd"} errObj={errObj} warehouse={warehouse}></Input>
                    <Input labelTxt={"City"} name={"wrhsCity"} errObj={errObj} warehouse={warehouse}></Input>
                    <Input labelTxt={"Country"} name={"wrhsCountry"} errObj={errObj} warehouse={warehouse}></Input>
                </div>
                <hr className='frmgrid__seprator' />
                <div className="frmgrid__right">
                    <Title title={"Contact Details"}></Title>
                    <Input labelTxt={"Contact Name"} name={"cntcName"} errObj={errObj} warehouse={warehouse}></Input>
                    <Input labelTxt={"Position"} name={"cntcPos"} errObj={errObj} warehouse={warehouse}></Input>
                    <Input labelTxt={"Phone Number"} name={"cntcPhn"} errObj={errObj} warehouse={warehouse}></Input>
                    <Input labelTxt={"Email"} name={"cntcEmail"} errObj={errObj} warehouse={warehouse}></Input>
                </div>
            </div>
            <div className="frmgrid__footer">
                <Link to={'/warehouses'} className='frmgrid__cancel'>Cancel</Link>
                <button type="submit" className='frmgrid__save'>{warehouseId ? `Save` : `+ Add Warehouse`}</button>
            </div>
        </form> */}
        </>
    )
}