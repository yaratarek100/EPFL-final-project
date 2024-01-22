
// login 
const user_name_box=document.getElementById('user_name_box');
const pass_wored_box=document.getElementById('pass_wored_box');
const log_in_button=document.getElementById('log_in_button');
const log_in_form=document.getElementById('log_in_form');

const user_name_new=document.getElementById('user_name_new');
const pass_wored_new1=document.getElementById('pass_wored_new1');
const pass_wored_new2=document.getElementById('pass_wored_new2');
const sign_up= document.getElementById('sign_up');
const sign_up_form=document.getElementById('sign_up_form');

// // index
const add_new_story=document.getElementById('add_new_story');
const stories_container=document.getElementById('stories_container');

// // storyform
const story_id=document.getElementById('story_id');
const story_title=document.getElementById('story_title');
const story_content=document.getElementById('story_content');


document.addEventListener('DOMContentLoaded', function () {
   




// function signup()
//    { 
//     if(window.getComputedStyle(sign_up_form).display=="none"){
//         sign_up_form.style.display="block";
//     }
//     else{
//     un=user_name_new.value;
//     up=pass_wored_new1.value;
//     up2=pass_wored_new2.value;
//     if(localStorage.getItem(un)==null) { 
//         if(up==up2)   {localStorage.setItem(un,up);  }
//         else{ 
//             // passwored not simeller
//             desplay_masseges("passwored is not simeller try again",sign_up_form)
//             pass_wored_new1.value=null;
//             pass_wored_new2.value=null;
//         }
//     }
//      else{
//         //this user name is registered sign in
//         desplay_masseges("this user name is registered login",log_in_form)
//         sign_up_form.style.display="none"
//         user_name_box.value=un;
//      }
//     }
//     }

  
// function login()
// {
//     un=user_name_box.value;
//     up=pass_wored_box.value;
//     if(localStorage.getItem(un)==null)
//     {
        
//         desplay_masseges("not exsist",log_in_form)
        
//     }
//     else
//     {
//         if (localStorage.getItem(un)==up) {
//             desplay_masseges("signed in seccessfully",log_in_form)
//         }
//         else{
            
//             desplay_masseges("password isn't correct",log_in_form)
//         }
//     }

// }

// // function defo(){
   
// //     if(localStorage.getItem("user")!=null){ 
// //         gp.innerText="WELL COME BACK "+localStorage.getItem("user");}
    
// // }


function loginf(){

    let newLocation = '/home.html';

    window.location.href = newLocation;

}
// function add_new_stor(){
//     let newLocation = '/add_story';

//     window.location.href = newLocation;
// }

function creat_obj(){
    
}
// // lob.addEventListener("click",logout);




// sign_up.addEventListener("click",signup);
// // localStorage.clear();




function post_card (){
// creat new card
let i=1;
    const new_title=document.createElement('h3');       
    
    // شغالة حلو قبل الداتا من ال json
    // new_title.innerHTML=`<h3 id="" >new title ${i}</h3>`;
    // دي كمان شغالة تمام
    // const title_form_data="bbbbb"
    // new_title.innerHTML=`<h3 id="title${i}" >`+title_form_data+"</h3>";
    
    
    // new_title.innerHTML=`<h3 id="title${i} ">{{ storie.title }} </h3>`;

    // const new_par=document.createElement('p');          
    // new_par.innerHTML=`<p>new par ${i}</p>`;                
    // new_par.className = "story_content";
    // const new_card=document.createElement('div');  
    // new_card.appendChild(new_title);
    // new_card.appendChild(new_par); 
    // new_card.className = "story_card";
    // ----------------------------------------


// display it
stories_container.appendChild(new_card)

}
const i = 1; // يمكنك استخدام قيمة i التي تحتاجها

const new_card = document.createElement('div');
new_card.innerHTML = `
    <h3 id="title${i}">{{title}} </h3>
    <p class="story_content">{{new par }}</p>
`;
new_card.className = "story_card";

// إضافة new_card إلى العنصر الهدف في الصفحة
document.getElementById("العنصر-الهدف").appendChild(new_card);



if (log_in_button) {
    log_in_button.addEventListener("click",loginf);}
    
    if (add_new_story) {
    // add_new_story.addEventListener("click",add_new_stor);
    add_new_story.addEventListener("click",post_card)}

})

// {% for person in data['persons'] %}
//             <p>{{ person.name }} - {{ person.age }} - {{ person.city }}</p>
//         {% endfor %}