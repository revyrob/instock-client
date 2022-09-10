export function ErrorSpan({errObj,name}){
    console.log(errObj['wrhsCats'])
    return(<span className='frmgrid__errspn' style={errObj[name] ? {"display":"block"}:{"display":"none"}}>{errObj[name]}</span> )
}