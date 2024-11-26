// system.debug(UserInfo.getLocale()); --> to get date info (en_US)
// captcha link - https://www.google.com/recaptcha/admin/create

let capthachecked = false;
function beforesubmit(event){
if(capthachecked){
    
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log("inputdate.value", inputdate.value);
    
        let formattedDate = new Date(inputdate.value).toLocaleDateString("en-US");
        outputdate.value = formattedDate;
    } else {
        alert("Please check the reCAPTCHAA box to submit the lead");
        event.preventDefault();
    }
}


function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 


function capthasucess(){
    capthachecked = true;
}