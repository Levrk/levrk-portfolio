

function selectBio() {
    //set vars
    var bio = document.getElementById("bio");
    var thisButton = document.getElementById("bio-button");
    var thatButton = document.getElementById("links-button");
    var links = document.getElementById("links");
    

    //make changes to indicate selection
    thisButton.classList.add("button-selected")
    thatButton.classList.remove("button-selected")
    links.classList.remove("content-selected");
    bio.classList.add("content-selected");

    //updating global vars
    bioSelected=true;
    linksSelected=false;
}

function selectLinks() {
    //set vars
    var links = document.getElementById("links");
    var thisButton = document.getElementById("links-button");
    var thatButton = document.getElementById("bio-button");
    var bio = document.getElementById("bio");
  


    //make changes to indicate selection
    thisButton.classList.add("button-selected")
    thatButton.classList.remove("button-selected")
    bio.classList.remove("content-selected");
    links.classList.add("content-selected");

    //updating global vars
    linksSelected=true;
    bioSelected=false;
}

function selectResume() {
    //set vars
    var resume = document.getElementById("resume");
    var thisButton = document.getElementById("resume-button");
    var thatButton = document.getElementById("skills-button");
    var skills = document.getElementById("skills");
    


    //make changes to indicate selection
    thisButton.classList.add("button-selected")
    thatButton.classList.remove("button-selected") 
    
    skills.classList.remove("content-selected");
    resume.classList.add("content-selected");

    //updating global vars
    resumeSelected=true;
    skillsSelected=false;
}

function selectSkills() {
    //set vars
    var skills = document.getElementById("skills");
    var thisButton = document.getElementById("skills-button");
    var thatButton = document.getElementById("resume-button");
    var resume = document.getElementById("resume");
    



    //make changes to indicate selection
    thisButton.classList.add("button-selected")
    thatButton.classList.remove("button-selected")
    resume.classList.remove("content-selected");
    skills.classList.add("content-selected");

    //updating global vars
    skillsSelected=true;
    resumeSelected=false;
}




function selectProject1() {
    //set vars
    var project1 = document.getElementById("project1");
    var project1Button = document.getElementById("project1-button");
    var project2Button = document.getElementById("project2-button");
    var project3Button = document.getElementById("project3-button");
    var project2 = document.getElementById("project2");
    var project3 = document.getElementById("project3");
    
    //if resume is selected already
    


    //make changes to indicate selection
    project2Button.classList.remove("button-selected");
    project3Button.classList.remove("button-selected");
    project2.classList.remove("content-selected");
    project3.classList.remove("content-selected");

    project1.classList.add("content-selected");
    project1Button.classList.add("button-selected");

}

function selectProject2() {
    //set vars
    var project1 = document.getElementById("project1");
    var project1Button = document.getElementById("project1-button");
    var project2Button = document.getElementById("project2-button");
    var project3Button = document.getElementById("project3-button");
    var project2 = document.getElementById("project2");
    var project3 = document.getElementById("project3");
    
    //if resume is selected already
    


    //make changes to indicate selection
    project1Button.classList.remove("button-selected");
    project3Button.classList.remove("button-selected");
    project1.classList.remove("content-selected");
    project3.classList.remove("content-selected");

    project2.classList.add("content-selected");
    project2Button.classList.add("button-selected");

}

function selectProject3() {
    //set vars
    var project1 = document.getElementById("project1");
    var project1Button = document.getElementById("project1-button");
    var project2Button = document.getElementById("project2-button");
    var project3Button = document.getElementById("project3-button");
    var project2 = document.getElementById("project2");
    var project3 = document.getElementById("project3");
    
    //if resume is selected already
    


    //make changes to indicate selection
    project1Button.classList.remove("button-selected");
    project2Button.classList.remove("button-selected");
    project1.classList.remove("content-selected");
    project2.classList.remove("content-selected");

    project3.classList.add("content-selected");
    project3Button.classList.add("button-selected");

}












document.addEventListener('mousemove', function(event) {
    
    var X = ((event.clientX / window.innerWidth) * 200)-50;
    var Y = ((event.clientY / window.innerHeight) * 200) - 100;
    var elements = document.querySelectorAll('.background-pattern');

    for(var i = 0;i<elements.length; i++){
    if (i == 0){elements[i].style.backgroundImage = "radial-gradient(circle at " + X + "% " + Y + "%, #aa0cff, #0000ff, #000000)";}
    else if (i == 1){elements[i].style.backgroundImage = "radial-gradient(circle at " + X + "% " + Y + "%, #68FF11 , #50FF92    , #000000)";}
    else if (i == 2){elements[i].style.backgroundImage = "radial-gradient(circle at " + X + "% " + Y + "%, #7C00FF , #D500FF   , #000000)";}
    else if (i == 3){elements[i].style.backgroundImage = "radial-gradient(circle at " + X + "% " + Y + "%, #FF0000  , #FFEC00   , #000000)";}
    
}
});

window.onload = function() {
    // Execute your functions here
    onLoad();
  };

function onLoad() {
    selectBio();
    selectProject1();
    selectResume();
}