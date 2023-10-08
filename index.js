
for (var i = 0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        
    var buttonInnerHtml = this.innerHTML
       
    char_sound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml); 

    })
}

function char_sound(character){
    switch (character) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3')
            tom1.play()
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3')
            tom2.play()
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3')
            tom3.play()
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3')
            tom4.play()
            break;
        case "j":
            var crash = new Audio('./sounds/crash.mp3')
            crash.play()
            break;
        case "k":
            var snare = new Audio('./sounds/snare.mp3')
            snare.play()
            break;
        case "l":
            var kick = new Audio('./sounds/kick-bass.mp3')
            kick.play()
            break;
                                                                
        default:
            break;
    }
}

document.addEventListener('keydown', function(event){
    char_sound(event.key);
    buttonAnimation(event.key);
})

function buttonAnimation(currentKey){   // currentKey here can be : event.key OR buttonInnerHtml with not '.' with it.
 
    var activeKey = document.querySelector("."+currentKey);  //this stores the entire html element with that class to it.
    activeKey.classList.add('pressed');

    setTimeout(function(){
        activeKey.classList.remove('pressed')
    }, 100);
}