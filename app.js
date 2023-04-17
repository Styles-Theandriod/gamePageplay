
// Making Mobile screen not accessable 
if (window.innerWidth < 500){
  document.body.style.display = "none";
  document.querySelector("demo").style.display = "block";
}


// This Brings the Toggle fullScreen to Live 
(function () {
    var viewFullScreen = document.getElementById("view-fullscreen");
    if (viewFullScreen) {
        viewFullScreen.addEventListener("click", function () {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.mozRequestFullScreen) {
                docElm.mozRequestFullScreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
        }, false);
    }
    })();

    // This athomatically plays the aduio immidiatly the browser Loads 
    window.addEventListener("DOMContentLoaded", event => {
        const audio = document.querySelector("audio");
        audio.volume = 0.2;
        audio.play();
      });

      

let StartButton = document.getElementById('startButton')
StartButton.addEventListener('click', function(){
  console.log('Btn clicked');
  let container = document.getElementById('container')
  let world = document.getElementById('world')
  let viewFullScreen = document.getElementById('view-fullscreen')
  viewFullScreen.style.display = 'none'
  container.style.display='none';
  document.body.style.backgroundImage = 'none';
  world.style.display = 'block';

  const audio = document.querySelector("audio");
  audio.pause()

})


// This code makes my newly created cursor works  
const cursorSmall = document.querySelector('.small')
const cursorBig = document.querySelector('.big')

const positionElement = (e)=>{
  const mouseY = e.clientY;
  const mouseX = e.clientX;

  cursorSmall.style.transform =`translate3d(${mouseX}px, ${mouseY}px, 0)`
  cursorBig.style.transform =`translate3d(${mouseX}px, ${mouseY}px, 0)`
}

window.addEventListener('mousemove',positionElement ) // This one initailly


