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