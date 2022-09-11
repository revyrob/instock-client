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

export function formatPhoneNumber(number){  
    let phoneNumberArray = number.split('')
    console.log(phoneNumberArray)
    let trimmedPhoneNumber = phoneNumberArray.filter((function(e){     
                return Number(e)
            })).join('') 
    if(trimmedPhoneNumber.length===11){
        let areaCode = trimmedPhoneNumber.slice(1,4);
        let phoneNumberLastFourDigits = trimmedPhoneNumber.slice(-4);
        let phoneNumberMiddleFourDigits = trimmedPhoneNumber.slice(4,7);
        console.log(phoneNumberMiddleFourDigits)
        let formatedPhoneNumber = `+1 (${areaCode}) ${phoneNumberMiddleFourDigits}-${phoneNumberLastFourDigits}`;
        return formatedPhoneNumber;
    }else{
        let areaCode = trimmedPhoneNumber.slice(0,3);
        let phoneNumberLastFourDigits = trimmedPhoneNumber.slice(-4);
        let phoneNumberMiddleFourDigits = trimmedPhoneNumber.slice(3,6);
        console.log(phoneNumberMiddleFourDigits)
        let formatedPhoneNumber = `+1 ${areaCode} ${phoneNumberMiddleFourDigits}-${phoneNumberLastFourDigits}`;
        return formatedPhoneNumber;
    }  
}