function CanDrive(hasDrivingLiscence, isTired, isSober) {
    // Write you code here
    if (hasDrivingLiscence){
        if(isTired==false && isSober==true) return  "You can drive"
        else if(isSober==true) return "You shouldn't drive"
        else return "You shouldn't drive"
        
    }
    else{
    return "You cannot drive"
    }
}

module.exports = CanDrive;
