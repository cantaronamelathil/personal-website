let username = document.getElementById("username");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    
    let error=document.getElementsByClassName("error");
    let show=document.getElementById("show");
    
function validate()
{
    // usernamae validation
    if(username.value == "")
    {
       error[0].innerHTML = "You can't leave this section blank";
       document.submit-form.username.focus();
       return false;
    }
    else if(!isNaN(username.value))
    {
        error[0].innerHTML = "You cannot enter numbers in this section";
        document.submit-form.username.focus();
        return false;
    }
    else if(username.value.length <= 3)
    {
        error[0].innerHTML = "Enter your full name";
        document.submit-form.username.focus();
        return false;
    }
    else
    {
        error[0].innerHTML = "";
    }

    // email validation
    if(email.value == "")
    {
       error[1].innerHTML = "You can't leave this section blank";
       document.submit-form.email.focus();
       return false;
    }
    else if(email.value.indexOf('@') <= 0)
    {
        error[1].innerHTML = "please use an '@' in the email";
        document.submit-form.email.focus();
        return false;
    }
    else if((email.value.charAt(email.value.length-4)!='.') && (email.value.charAt(email.value.length-3)!='.'))
    {
        error[1].innerHTML = "please enter a valid email";
        document.submit-form.email.focus();
        return false;
    }
    else
    {
        error[1].innerHTML = "";
    }
    
    // Subject validation 
    if(subject.value == "")
    {
       error[2].innerHTML = "You can't leave this section blank";
       document.submit-form.subject.focus();
       return false;
    }
    else
    {
        error[2].innerHTML = "";
    }

    // message validation
    if(message.value == "")
    {
       error[3].innerHTML = "You can't leave this section blank";
       document.submit-form.message.focus();
       return false;
    }
    else if(message.value.length <= 50)
    {
        error[3].innerHTML = "Enter minimum of 50 characters";
        document.submit-form.message.focus();
        return false;
    }
    else
    {
        error[3].innerHTML = "";
    }
    
    return true;
}

// submission

$("#submit-form").submit((e)=>{
    e.preventDefault();
    let validation = validate();

    if(validation)
    {
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbzt66izNcoQ7m3rY5K9nffJ60sC2TUi5vZsBchjcA6h6tqYyX9-NWKgpJ1D3x3F9mbr/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            window.location.reload()
        },
        error:function (err){
            alert("Something Error")

        }
        })}
})