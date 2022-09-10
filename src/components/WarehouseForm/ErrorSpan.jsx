export function ErrorSpan({errObj,name}){
    return(<span className='frmgrid__errspn' style={errObj[name] ? {"display":"block"}:{"display":"none"}}>{errObj[name]}</span> )
}