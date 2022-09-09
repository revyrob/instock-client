export function SumbitButton({warehouseId}){
    return( <button type="submit" className='frmgrid__save'>{warehouseId ? `Save` : `+ Add Warehouse`}</button>)
}