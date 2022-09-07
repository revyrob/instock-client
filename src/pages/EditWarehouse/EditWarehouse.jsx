import PageHeader from "../../components/PageHeader/PageHeader";
import WarehouseForm from "../../components/WarehouseForm/WarehouseForm";
import './EditWarehouse.scss'
export default function EditWarehouse(){
    return(
        <>
            <PageHeader title={"Edit Warehouse"}></PageHeader>
            <div className="edit-wrhse">
                <WarehouseForm ></WarehouseForm>
            </div>  
        </>  
    )
}