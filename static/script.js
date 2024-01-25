document.addEventListener('DOMContentLoaded', function () {
let current_page = window.location.pathname;

// current user
let is_user=localStorage.getItem("current_user"); 

// // home page for 2 cases
// if(current_page='/' || current_page.startsWith('/user')){
//     // PAGE ELEMENTS
//     const story_cards = document.getElementsByClassName('story_card');
//     let login_button = document.getElementById('login_button');
//     let sign_button = document.getElementById('sign_button');
//     let add_story_button = document.getElementById('add_story_button');
//     let logout_button = document.getElementById('logout_button');
//     let name_p =document.getElementById("name_p");//hiden just for user name value

// function user_mode (){
//     // display name & enable  -edit -delete -add -logout
//     // hide sign buttons
//         sign_button.style.display = "none";
//         login_button.style.display = "none";
//     // display add & sign out
//         add_story_button.style.display = "inline-block";
//         logout_button.style.display = "inline-block";
//         name_p.style.display = "inline-block";
//     // can log out-->clear local storage
//     // and redirect to home page
//         logout_button.addEventListener("click", function(){
//         localStorage.clear();
//         window.location.href = '/';
//         }) }
    
//     // display all story when clicked...for all cards
//         for (const story_card of story_cards) {
//             story_card.addEventListener('click', function() {
//                 let card_id = story_card.id;
//                 window.location.href = '/story/'+card_id;
//             }); }
 
// // default case

//         if(current_page='/'){
//             if (is_user==null){
//             add_story_button.style.display = "none";
//             logout_button.style.display = "none";  }
//             else{
//                 user_mode();
//             }
//             }
// // only users....
//             if (window.location.pathname.startsWith('/user')) {
//                 // store user
//                 const user_name=name_p.innerText
//                 localStorage.setItem("current_user",user_name);
//                 user_mode();  
                
//                 }
// }
// adding & editing form

    if (window.location.pathname.startsWith('/add_story')) {
        // change function of the edit form
        const story_form =document.getElementById('story_form');
        const form_title=document.getElementById('form_title');
        form_title.innerText="Add New Story";
        story_form.action="/post_new_story";
        }      

// display all the story page

 if (window.location.pathname.startsWith('/story')) {
        let edite_button=document.getElementById('edite_button');
        let delet_button=document.getElementById('delet_button');
    // only signed users can edit and delete
        if (is_user==null){
        edite_button.style.display = "none";
        delet_button.style.display = "none";
        }
        }  



    });

