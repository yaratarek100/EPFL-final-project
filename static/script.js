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





document.addEventListener('DOMContentLoaded', function () {
let current_page = window.location.pathname;

if(current_page='/'){
    const story_cards = document.getElementsByClassName('story_card');
    for (const story_card of story_cards) {
    story_card.addEventListener('click', function() {
        let card_id = story_card.id;
        window.location.href = '/'+card_id;
    });  }}

    if (window.location.pathname.startsWith('/add_story')) {
    const story_form =document.getElementById('story_form')
    const form_title=document.getElementById('form_title');

    form_title.innerText="Add New Story";
    story_form.action="/post_new_story";
   
    }
    function logout()
       { localStorage.clear();}

});