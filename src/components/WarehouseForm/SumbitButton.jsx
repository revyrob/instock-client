export function SumbitButton({activeId,buttonText}){
    return( <button type="submit" className='frmgrid__save'>{activeId ? `Save` : `+ Add ${buttonText}`}</button>)
}