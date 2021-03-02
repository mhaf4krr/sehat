class LoginAuth {
    constructor(){
        LoginAuth.otp_sent = false
        LoginAuth.otp_verified = false
        LoginAuth.phone = ""
        
        document.querySelector("#gen_otp").addEventListener("click",LoginAuth.generateOTP)
        document.querySelector("#verify_otp_btn").addEventListener("click",LoginAuth.verifyOTP)
    }

     static generateOTP = async function() {
       
        let phone = document.querySelector("#phone").value

        if(LoginAuth.checkForValidInput(phone)){
            document.querySelector("#phone").disabled = true
            let otp_btn =  document.querySelector("#gen_otp")
            LoginAuth.phone = phone
            otp_btn.disabled = true

            let response = await fetch(`https://sehat.hyderdevelops.ml/users/generateOTP?phone=${phone}`,{
               method:"POST"
            })


            if(response.status == 200){
                LoginAuth.showAnimation("success","OTP has been sent")
                LoginAuth.otp_sent = true
            }

            else {
                document.querySelector("#phone").disabled = false
                LoginAuth.showAnimation("danger","Error Occured")
                otp_btn.disabled = false
            }
        }

       
    }

    static checkForValidInput = function(value){
        if(value == "" || value.length == 0){
            console.log("Empty Input")
            LoginAuth.showAnimation("danger","EMPTY VALUE")
            return false
        }

        return true
        
    }

    static showAnimation = function(type,text){
        let footer = document.querySelector(".footer")
        let msg = document.querySelector(".footer_message")
        if(type == "success"){
            
            footer.style.backgroundColor = "green"
           
        }

        else {
            footer.style.backgroundColor = "red"
        }

        msg.style.color = "white"
        footer.style.bottom = "0rem";
        msg.textContent = text

        setTimeout(()=>{
            footer.style.bottom = "-20rem"
        },2500)
    }


    static verifyOTP = async function(){

        if(!LoginAuth.otp_sent){
            LoginAuth.showAnimation("danger","GENERATE OTP FIRST ... ")
            return false
        }

        let otp_value = document.querySelector("#otp_value").value
        if(LoginAuth.checkForValidInput(otp_value)){
            let otp_btn = document.querySelector("#verify_otp_btn")
            
            otp_btn.disabled = true
            LoginAuth.showAnimation("success","VERIFICATION IN PROGRESS ...")

            

            let response = await fetch(`https://sehat.hyderdevelops.ml/users/verifyOTP?phone=${LoginAuth.phone}&otp=${otp_value}`,{
                method:"POST"
            })

            console.log(response.status)


            if(response.status === 200){
                let user = await response.json()
               
                console.log(user)
                window.localStorage.setItem("user",JSON.stringify(user))
                LoginAuth.showAnimation("success","LOGIN SUCCESS")
                window.location.assign("./dashboard.html")
            }


            else if(response.status === 401){
                LoginAuth.showAnimation("danger","OTP VERIFICATION FAILED")
                otp_btn.disabled = false
            }
        }
    }
}


let login_system = new LoginAuth()