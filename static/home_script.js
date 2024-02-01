document.addEventListener('DOMContentLoaded', function () {
    let currentPage = window.location.pathname;
    
    // current user
    let isUser=localStorage.getItem("currentUser"); 

    
// home page for 2 cases
if(currentPage='/' || currentPage.startsWith('/user')){
    // PAGE ELEMENTS
    let storyCards = document.getElementsByClassName('story_card');
    let loginButton = document.getElementById('login_button');
    let signButton = document.getElementById('sign_button');
    let addStoryButton = document.getElementById('add_story_button');
    let logoutButton = document.getElementById('logout_button');
    let nameP =document.getElementById("name_p");
    const rundomButton=document.getElementById("rundom_button")
    let noStoyies=storyCards.length;

function user_mode (){
    // display name & enable  -edit -delete -add -logout
    // hide sign buttons
        signButton.style.display = "none";
        loginButton.style.display = "none";
    // display add & sign out
        addStoryButton.style.display = "inline-block";
        logoutButton.style.display = "inline-block";
    // can log out-->clear local storage
    // and redirect to home page
        logoutButton.addEventListener("click", function(){
        localStorage.clear();
        window.location.href = '/';
        }) }
    
    // display all story when clicked...for all cards
        for (const storyCard of storyCards) {
            storyCard.addEventListener('click', function() {
                let card_id = storyCard.id;
                window.location.href = '/story/'+card_id;
            }); }

        if (noStoyies==0){
            rundomButton.style.display = "none";
        }    

            function getRundom()
            {
            let randomNumber = Math.floor(Math.random() * noStoyies) + 0;
            window.location.href = '/story/'+randomNumber;
            }
            // rundom story 
            rundomButton.addEventListener("click",getRundom);    
 
        // default case
        if(currentPage='/'){
            if (isUser==null){
            addStoryButton.style.display = "none";
            logoutButton.style.display = "none";  }
            else{
                user_mode();
                nameP.innerText=localStorage.getItem("currentUser")
            }
            }
        // only users....
        if (window.location.pathname.startsWith('/user')) {
            // store user
            const userName=nameP.innerText
            localStorage.setItem("currentUser",userName);

            user_mode();  
            }
                
}
});