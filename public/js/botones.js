// scroll up
document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp(){

    let currentScroll = document.documentElement.scrollTop ||
	document.body.scrollTop;;

    if (currentScroll > 0){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo (0, currentScroll - (currentScroll / 30));
    }
}


///

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

   let scroll = document.documentElement.scrollTop;

    if (scroll > 1000){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 2000){
        buttonUp.style.transform = "scale(0)";
    }
    
}

