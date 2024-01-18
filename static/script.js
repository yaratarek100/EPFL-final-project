
const user_name_box=document.getElementById('user_name_box');
const pass_wored_box=document.getElementById('pass_wored_box');
const log_in_button=document.getElementById('log_in_button');
const log_in_form=document.getElementById('log_in_form');

const user_name_new=document.getElementById('user_name_new');
const pass_wored_new1=document.getElementById('pass_wored_new1');
const pass_wored_new2=document.getElementById('pass_wored_new2');
const sign_up= document.getElementById('sign_up');
const sign_up_form=document.getElementById('sign_up_form');


function desplay_masseges (mass,pardiv) {
    const paragraph=document.createElement("p");
    paragraph.innerText = mass;
    // paragraph.className=clas;
    pardiv.appendChild(paragraph);
}

// function logout()
//    { localStorage.clear();
//     defo();
//     }

function signup()
   { 
    if(window.getComputedStyle(sign_up_form).display=="none"){
        sign_up_form.style.display="block";
    }
    else{
    un=user_name_new.value;
    up=pass_wored_new1.value;
    up2=pass_wored_new2.value;
    if(localStorage.getItem(un)==null) { 
        if(up==up2)   {localStorage.setItem(un,up);  }
        else{ 
            // passwored not simeller
            desplay_masseges("passwored is not simeller try again",sign_up_form)
            pass_wored_new1.value=null;
            pass_wored_new2.value=null;
        }
    }
     else{
        //this user name is registered sign in
        desplay_masseges("this user name is registered login",log_in_form)
        sign_up_form.style.display="none"
        user_name_box.value=un;
     }
    }
    }

  
function login()
{
    un=user_name_box.value;
    up=pass_wored_box.value;
    if(localStorage.getItem(un)==null)
    {
        
        desplay_masseges("not exsist",log_in_form)
        
    }
    else
    {
        if (localStorage.getItem(un)==up) {
            desplay_masseges("signed in seccessfully",log_in_form)
        }
        else{
            
            desplay_masseges("password isn't correct",log_in_form)
        }
    }

}

// function defo(){
   
//     if(localStorage.getItem("user")!=null){ 
//         gp.innerText="WELL COME BACK "+localStorage.getItem("user");}
    
// }



// lob.addEventListener("click",logout);
log_in_button.addEventListener("click",login);
sign_up.addEventListener("click",signup);
// localStorage.clear();
