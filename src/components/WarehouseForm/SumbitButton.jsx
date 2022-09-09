export function SumbitButton({warehouseId,buttonText}){
    return( <button type="submit" className='frmgrid__save'>{warehouseId ? `Save` : `+ Add ${buttonText}`}</button>)
}