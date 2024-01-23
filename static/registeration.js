// log in form elements


const user_name_box=document.getElementById('user_name_box');
const pass_wored_box=document.getElementById('pass_wored_box');
const log_in_button=document.getElementById('log_in_button');
const log_in_form=document.getElementById('log_in_form');
// sign up form elements
const user_name_new=document.getElementById('user_name_new');
const pass_wored_new1=document.getElementById('pass_wored_new1');
const pass_wored_new2=document.getElementById('pass_wored_new2');
const sign_up_button= document.getElementById('sign_up_button');
const sign_up_form=document.getElementById('sign_up_form');
// create new account
const create_account_button =document.getElementById('create_account_button')
//  class
const data_file = 'users_data.json';

function stor_new_user(name,password){
   const user_dec = {
    "name": name,
    "password": password,
  }; 

const jsonData = JSON.stringify(user_dec, null, 2);

// ========عكس fech
// fs.writeFileSync(data_file, jsonData);
}


function desplay_masseges (massege,pardiv) {
    const paragraph=document.createElement("p");
    paragraph.innerText = massege;
    // paragraph.className=clas;
    pardiv.appendChild(paragraph);
}

function logout()
{ localStorage.clear();}

function find_user_data (user_name_ui){
// localstorage
pass =localStorage.getItem(user_name_ui)
if(pass!=null){
    return pass
} else{
    return -1 //(for not found case)
}
 
}



// function find_user_data (user_name_ui){
//  //useing fetch
//     fetch("/logincheck")
//     .then(response => response.json())
//     .then(data => {  users =data; 
//         for( user in users ){
//             if(user.name==user_name_ui){
//                 password_data = user.password;
//             } else{
//                 password_data=-1 //(for not found case)
//             }}
//         // return password_data //or -1 
//         console.log(password_data);
//        });


// }

function check_password(password_ui,password_data){
if(password_ui==password_data)
return true
else{return false}
}

function open_sign_up (){
    // display sigu up form
        sign_up_form.style.display="block";
    }

function login(user_name,password_interface) {
    password_data =find_user_data(user_name);
    if(password_data==-1){   //mean user is not found
     desplay_masseges("not exsist",log_in_form) 
     }
    else // then check the password
    { 
        is_correct= check_password(password_interface, password_data);
        if ( is_correct== true) {
            desplay_masseges("signed in seccessfully",log_in_form);
            localStorage.setItem("current_user",user_name)
        }
        else{
            desplay_masseges("password isn't correct...try agin",log_in_form);
            pass_wored_new1.value=null;
        }
    }}


    
function signup(user_name,password1,password2)
{ 
 if(find_user_data(user_name)==-1) { 
     if(password1==password2)   {
        stor_new_user(user_name,password1)
      }
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
function active_login (){login(user_name_box.value,pass_wored_box.value)}
function active_sinup (){ signup(user_name_new.value,pass_wored_new1.value,pass_wored_new2.value)}

log_in_button.addEventListener ("click"  ,   active_login ) 
create_account_button.addEventListener("click"  , open_sign_up)
sign_up_button.addEventListener("click"  , active_sinup )