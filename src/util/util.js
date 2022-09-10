export function formValidationInventory(formObj){
    const {invrName,invrDesc,invrCats,invrStat,invrQuan,wrhsCats} = formObj
    console.log(wrhsCats)
    //local err obj to collect err inputs 
    const localErrObj = {
        valid:false,
    }
   
    
   
    if(!invrName.value.replace(/\s/g, '').length){
        localErrObj[invrName.name] = "this field is required"
        localErrObj.valid = true;
    }

     //check if field is not empty
    if(!invrDesc.value.replace(/\s/g, '').length){
        localErrObj[invrDesc.name] = "this field is required"
        localErrObj.valid = true;
    }

     //check if field is not empty
    if(!invrCats.value.replace(/\s/g, '').length){
        localErrObj[invrCats.name] = "this field is required"
        localErrObj.valid = true;
    }
    if(!wrhsCats.value.replace(/\s/g, '').length){
        localErrObj[wrhsCats.name] = "this field is required"
        localErrObj.valid = true;
    }
    if(invrQuan){
        if(invrStat.value==="In Stock" && Number(invrQuan.value)<=0){
            console.log("in if else")
            localErrObj[invrQuan.name] = `${Number(invrQuan.value)} qauntity for in stock?` 
            localErrObj.valid = true;
        }
    //    if(!Number(invrQuan.value)){
    //         localErrObj[invrQuan.name] = "please enter a number"
    //         localErrObj.valid = true;
    //     }
    }
    

    if(localErrObj.valid){
        return localErrObj;
    }else{
        return false
    }
    
}