document.addEventListener('DOMContentLoaded', function () {
let current_page = window.location.pathname;

// current user
let is_user=localStorage.getItem("current_user"); 
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

