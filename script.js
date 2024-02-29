const chasisNo = document.getElementById('chasis');
const engineNo = document.getElementById('engine');
const timer = document.getElementById('timer');
const container = document.querySelector('.container');
let countDown;

chasisNo.addEventListener("change", startTimer);

function startTimer(){
    engineNo.value = '';
    clearTimeout(countDown);

    let seconds = 10;

    function updateTimer() {
        container.style.backgroundColor = 'white';
        container.style.outline = '.7rem solid rgb(34, 213, 201)';
        timer.textContent = `${seconds}`;

        if(engineNo.value != ''){
            console.log(seconds);
            timer.textContent = `${seconds}`;
            return;
        }

        if(seconds === 0){
        container.style.backgroundColor = 'transparent';
        container.style.outline = 'none';
            console.log("0");
            console.log(engineNo);
            console.log(engineNo.value);
            if(engineNo.value == ''){
                chasisNo.value = '';
                chasisNo.focus();
            }

            resetTimer();
        }else{
            seconds--;
            countDown = setTimeout(updateTimer, 1000)
        }
    }
    updateTimer();
}

function resetTimer(){
    clearTimeout(countDown);
    timer.textContent = ""
}