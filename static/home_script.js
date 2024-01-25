document.addEventListener('DOMContentLoaded', function () {
    let current_page = window.location.pathname;
    
    // current user
    let is_user=localStorage.getItem("current_user"); 

    
// home page for 2 cases
if(current_page='/' || current_page.startsWith('/user')){
    // PAGE ELEMENTS
    let story_cards = document.getElementsByClassName('story_card');
    let login_button = document.getElementById('login_button');
    let sign_button = document.getElementById('sign_button');
    let add_story_button = document.getElementById('add_story_button');
    let logout_button = document.getElementById('logout_button');
    let name_p =document.getElementById("name_p");
    const rundom_button=document.getElementById("rundom_button")

function user_mode (){
    // display name & enable  -edit -delete -add -logout
    // hide sign buttons
        sign_button.style.display = "none";
        login_button.style.display = "none";
    // display add & sign out
        add_story_button.style.display = "inline-block";
        logout_button.style.display = "inline-block";
    // can log out-->clear local storage
    // and redirect to home page
        logout_button.addEventListener("click", function(){
        localStorage.clear();
        window.location.href = '/';
        }) }
    
    // display all story when clicked...for all cards
        for (const story_card of story_cards) {
            story_card.addEventListener('click', function() {
                let card_id = story_card.id;
                window.location.href = '/story/'+card_id;
            }); }
 
// default case

        if(current_page='/'){
            if (is_user==null){
            add_story_button.style.display = "none";
            logout_button.style.display = "none";  }
            else{
                user_mode();
                name_p.innerText=localStorage.getItem("current_user")
            }
            }
// only users....
            if (window.location.pathname.startsWith('/user')) {
                // store user
                const user_name=name_p.innerText
                localStorage.setItem("current_user",user_name);

                user_mode();  
                
                }

                function get_rundom()
                {
                let no_stoyies=story_cards.length;
                let randomNumber = Math.floor(Math.random() * no_stoyies) + 0;
                window.location.href = '/story/'+randomNumber;
                }
                rundom_button.addEventListener("click",get_rundom);
                
}
});