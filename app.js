const mole = document.querySelector('.mole');
const holes = document.querySelectorAll('.hole');
const score = document.querySelector('.score');
const sound = new Audio('mario.mp3');
sound.volume = 0.2;

let result = 0;
let hit;
let currentTime = 0;
let timerId = null;

function playSound(){
    if(sound && sound.readyToRock) {
        sound.currentTime = 0;
        sound.play();
    }
}

function randomHole(){
    holes.forEach(hole => {
        hole.classList.remove('mole');
    })

    let randomHole = holes[Math.floor(Math.random() * 9)];
    randomHole.classList.add('mole');

    hit = randomHole.id;
}

holes.forEach(hole => {
    hole.addEventListener('click', function(){
        if(hole.id == hit) {
            result++;
            score.innerHTML = result;
            sound.currentTime = 0;
            sound.play();
        }
    });
});

function moveMole(){
    setTimeout(function(){
        timerId = setInterval(randomHole, 400);

        // if(result >= 5){
        // clearInterval(timerId);
        // timerId = setInterval(randomHole, 100);
        // }

        setTimeout(function(){
            confirm(`Game over! Your score is ${result}. Play Again?`);
            if(confirm == true){
                location.reload();
            } else {
                location.reload();
            }
        }, 10000)
    },1000)
}   

