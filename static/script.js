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
        window.location.href = '/display_story/'+card_id;
    });  }}

if(current_page='/edit_story'){
    const story_id=document.getElementById('story_id');
    const story_title=document.getElementById('story_title');
    const story_content=document.getElementById('story_content');

    story_id.value='{{story.id}}';
    story_title.value='{{story.title}}';
    story_content.value='{{story.story_content}}';
    }

});