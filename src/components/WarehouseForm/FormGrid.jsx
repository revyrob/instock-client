export function FormGrid({activeId,handleEditSumbit,handleNewSumbit,children}){
    return(
        <form className="frmgrid" onSubmit={activeId ? handleEditSumbit : handleNewSumbit}>
            {children}
        </form>
    )
}