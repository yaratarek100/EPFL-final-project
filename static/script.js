
document.addEventListener('DOMContentLoaded', function () {
let current_page = window.location.pathname;

    if(current_page='/'){
        const story_cards = document.getElementsByClassName('story_card');
        for (const story_card of story_cards) {
        story_card.addEventListener('click', function() {
            let card_id = story_card.id;
            window.location.href = '/'+card_id;
        });  
        }}

    if (window.location.pathname.startsWith('/add_story')) {
        const story_form =document.getElementById('story_form')
        const form_title=document.getElementById('form_title');

        form_title.innerText="Add New Story";
        story_form.action="/post_new_story";
    
        }    



}

);


