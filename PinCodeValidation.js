
const prompt=require("prompt-sync")();
let pincode = prompt("Enter pincode: ");

const pinRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");

function validate(pincode){
    if(pinRegex.test(pincode)){
        console.log("Pincode is valid");
    }
    else{
        throw "Pincode: "+pincode +" is invalid !";
    }
}
try{
    validate(pincode);
}
catch(e){
    console.error(e);
}

