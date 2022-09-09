export function Label({labelTxt,children}){
    return(<label className="frmgrid__lbl">
    {labelTxt}
    {children}
    </label>)
}