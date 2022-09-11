export function formValidationInventory(formObj){
    const {invrName,invrDesc,invrCats,invrStat,invrQuan,wrhsCats} = formObj
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
            localErrObj[invrQuan.name] = `${Number(invrQuan.value)} qauntity for in stock?` 
            localErrObj.valid = true;
        }else if(isNaN(invrQuan.value)){
            localErrObj[invrQuan.name]='Number required';
            localErrObj.valid = true;
        }
    }
    if(localErrObj.valid){
        return localErrObj;
    }else{
        return false
    }
    
}

export function formatPhoneNumber(number){  
    let phoneNumberArray = number.split('')
    let trimmedPhoneNumber = phoneNumberArray.filter((function(e){     
                return !isNaN(e) && (e!=" ");
            })).join('') 
    if(trimmedPhoneNumber.length===11){
        let areaCode = trimmedPhoneNumber.slice(1,4);
        let phoneNumberLastFourDigits = trimmedPhoneNumber.slice(-4);
        let phoneNumberMiddleFourDigits = trimmedPhoneNumber.slice(4,7);
        let formatedPhoneNumber = `+1 (${areaCode}) ${phoneNumberMiddleFourDigits}-${phoneNumberLastFourDigits}`;
        return formatedPhoneNumber;
    }else{
        let areaCode = trimmedPhoneNumber.slice(0,3);
        let phoneNumberLastFourDigits = trimmedPhoneNumber.slice(-4);
        let phoneNumberMiddleFourDigits = trimmedPhoneNumber.slice(3,6);
        let formatedPhoneNumber = `+1 (${areaCode}) ${phoneNumberMiddleFourDigits}-${phoneNumberLastFourDigits}`;
        return formatedPhoneNumber;
    }  
}