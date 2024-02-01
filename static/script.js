document.addEventListener('DOMContentLoaded', function () {
let currentPage = window.location.pathname;

// current user
let isUser=localStorage.getItem("currentUser"); 
// adding & editing form

    if (currentPage.startsWith('/add_story')) {
        
        // change function of the edit form
        const storyForm =document.getElementById('story_form');
        const storyFormTitle=document.getElementById('story_form_title');
        storyFormTitle.innerText="Add New Story";
        storyForm.action="/post_new_story";
        }      

// display all the story page

 if (currentPage.startsWith('/story')) {
        let editeButton=document.getElementById('edite_button');
        let deletButton=document.getElementById('delet_button');
    // only signed users can edit and delete
        if (isUser==null){
        editeButton.style.display = "none";
        deletButton.style.display = "none";
        }
        }  
    });

