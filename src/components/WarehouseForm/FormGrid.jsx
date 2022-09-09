export function FormGrid({warehouseId,handleEditSumbit,handleNewSumbit,children}){
    return(
        <form className="frmgrid" onSubmit={warehouseId ? handleEditSumbit : handleNewSumbit}>
            {children}
        </form>
    )
}