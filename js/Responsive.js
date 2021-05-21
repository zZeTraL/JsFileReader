var root = document.documentElement;
var timer;
var screenWidth;

window.addEventListener("resize", function(){
    clearTimeout(timer);
    timer = this.setTimeout(function() {
        getDropFrameWidth();
    }, 25);
});

function getDropFrameWidth(){
    screenWidth = window.innerWidth;
    console.log(window.innerWidth);
    if(screenWidth < 1500){
        let result = 100 - ((screenWidth*65)/1500);
        root.style.setProperty("--dropFrameWidth", result + "%");
        return;
    }
    root.style.setProperty("--dropFrameWidth", 35 + "%");
}
