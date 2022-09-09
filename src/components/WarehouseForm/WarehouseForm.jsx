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

export default function WarehouseForm({warehouse,warehouseId,handleNewSumbit,handleEditSumbit,errObj}){
    
    return(
        <>
        <FormGrid warehouseId={warehouseId} handleEditSumbit={handleEditSumbit} handleNewSumbit={handleNewSumbit}>
            <FormBody>
            <FormGridLeft>
                <Title title={"Warehouse Details"}></Title>
                <Input labelTxt={"Warehouse Name"} name={"wrhsName"} errObj={errObj} defaultValue={warehouse ? warehouse.name : ""}></Input>
                <Input labelTxt={"Street Address"} name={"wrhsAdd"} errObj={errObj} defaultValue={warehouse ? warehouse.address : ""}></Input>
                <Input labelTxt={"City"} name={"wrhsCity"} errObj={errObj}
                defaultValue={warehouse ? warehouse.city : ""}></Input>
                <Input labelTxt={"Country"} name={"wrhsCountry"} errObj={errObj} defaultValue={warehouse ? warehouse.country : ""}></Input>
            </FormGridLeft>
            <FormGridSeprator></FormGridSeprator>
            <FormGridRight>
                <Title title={"Contact Details"}></Title>
                    <Input labelTxt={"Contact Name"} name={"cntcName"} errObj={errObj}  defaultValue={warehouse ? warehouse.contact.name : ""}></Input>
                    <Input labelTxt={"Position"} name={"cntcPos"} errObj={errObj}  defaultValue={warehouse ? warehouse.contact.position : ""}></Input>
                    <Input labelTxt={"Phone Number"} name={"cntcPhn"} errObj={errObj}  defaultValue={warehouse ? warehouse.contact.phone : ""}></Input>
                    <Input labelTxt={"Email"} name={"cntcEmail"} errObj={errObj} defaultValue={warehouse ? warehouse.contact.email : ""}></Input>
            </FormGridRight>
            </FormBody>
            <FormFooter>
                <CancelButton></CancelButton>
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