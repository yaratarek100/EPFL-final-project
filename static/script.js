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

// // home


// // storyform
const story_id=document.getElementById('story_id');
const story_title=document.getElementById('story_title');
const story_content=document.getElementById('story_content');

document.addEventListener('DOMContentLoaded', function () {
let current_page = window.location.pathname;
console.log(current_page);
// login  & sign up & log out
// -------------------------------------------------------------------------------------------
// (home) add new story --> (story form )
// 8888888888888888888 / -> /home
if (current_page === '/') {
const add_new_story=document.getElementById('add_new_story');
// add new story --> (story form )
function go_form(){  window.location.href = '/add_story';}
add_new_story.addEventListener("click", go_form )

}
// --------------------------------------------------------------------------------------------
// fill form 
// ---------
// delete & edite
// ------------

// all events 7777777777777777
// 888888888888888888888888888888 

// add_new_story.addEventListener("click",post_card)
});