export function Input({name,errObj,labelTxt,defaultValue}){
    console.log(name)
    return(<label className="frmgrid__lbl">
    {labelTxt}
    <input type="text" name={name} className={errObj[name] ? 'frmgrid__inpt frmgrid__inpt-err' : 'frmgrid__inpt'} defaultValue={defaultValue}/>
    <span className='frmgrid__errspn' style={errObj[name] ? {"display":"block"}:{"display":"none"}}>{errObj[name]}</span> 
</label>)
}