window.onload = function() {
    console.log("Ready to Whack!");

    let N, numberOfHoles, 
        timerMin, timerSec, 
        baseScore, correctHitPoint, 
        missHitPoint, popUpFrequency, 
        nbackProb, moleHatProb;
    const game = document.querySelector('.game');
    const keys = ['81', '87', '69', '65', '83', '68'];
    
    if (localStorage.length < 4){
        setDefault();
    }    

    function setDefault() {
        var userDefault = data[localStorage.level];
        // var userDefault = JSON.parse(data);
        // userDefault = userDefault[localStorage.level];

        try {
            localStorage.setItem('nBack', userDefault['nBack']);
            localStorage.setItem('numberOfHoles', userDefault['numberOfHoles']);
            localStorage.setItem('timerMin', userDefault['timerMin']);
            localStorage.setItem('timerSec', userDefault['timerSec']);
            localStorage.setItem('baseScore', userDefault['baseScore']);
            localStorage.setItem('correctHitPoint', userDefault['correctHitPoint']);
            localStorage.setItem('missHitPoint', userDefault['missHitPoint']);
            localStorage.setItem('incorrectHitPoint', userDefault['badHitPoint']);
            localStorage.setItem('popUpFrequency', userDefault['popUpFrequency']);
            localStorage.setItem('nbackProb', userDefault['nBackProb']);
            localStorage.setItem('moleHatProb', userDefault['moleHatProb']);
        } catch {}
    }
    
    getDefault();
    setHoles(numberOfHoles);
    
    const TIME_TOTAL = timerMin * 60 + timerSec;
    const IDLE_TIME = 15;

    // Declare the variables
    const holes = document.querySelectorAll('.hole');
    const scoreBoard = document.querySelector('#score');
    const timerCount = document.querySelector('#timer');
    const hitScore = document.querySelector('#hits');
    const missScore = document.querySelector('#misses');
    const badHitScore = document.querySelector('#badHits');
    const moles = document.querySelectorAll('.mole');
    const btns = document.querySelectorAll('button');
    const startButton = document.getElementById('ctrlBtn');
    // const quitButton = document.getElementById('quit');

    const musicBg = new Audio('media/sounds/musica.wav');
    const whackSound = new Audio('media/sounds/oww.wav');
    const whackMissSound = new Audio('media/sounds/whack.wav');

    const mole = "url('media/images/basicmole.png')";
    const moleCorrent = "url('media/images/basicmolecorrect2.png')";

    let molesBg = [];
    let moleFlag = 0;
    let lastHole;
    let lastMole;
    let timeUp = false;
    let timeHit;
    let timeMoleUp;
    let moleUp = 1;
    let idleTimeCount;
    let timerTotal = TIME_TOTAL;
    let score = baseScore;
    let miss = 0;
    let hit = 0;
    let badHit = 0;
    let interaction = {};

    // Flag for enabling buttons between operation or playing game
    let btnFlag = false;

    function setGame() {
        molesBg = [];
        moleFlag = 0;
        lastHole;
        lastMole;
        timerTotal = TIME_TOTAL;
        scoreBoard.textContent = baseScore;
        timerCount.textContent = Math.floor(TIME_TOTAL/60) + " : " + (TIME_TOTAL%60);
        hitScore.textContent = "0";
        missScore.textContent = "0";
        badHitScore.textContent = "0";
        timeUp = false;
        // btnFlag = false;
        startButton.disabled = false;
        score = baseScore;
        miss = 0;
        hit = 0;
        badHit = 0;
        moleUp = 1;
        holes.forEach(hole => hole.classList.remove('up'));
    }

    function getDefault() {
        try {
            // Assign defualt setting to variables
            N = parseInt(localStorage.getItem('nBack'));
            numberOfHoles = parseInt(localStorage.getItem('numberOfHoles'));
            timerMin = parseInt(localStorage.getItem('timerMin'));
            timerSec = parseInt(localStorage.getItem('timerSec'));
            baseScore = parseFloat(localStorage.getItem('baseScore'));
            correctHitPoint = parseFloat(localStorage.getItem('correctHitPoint'));
            missHitPoint = parseFloat(localStorage.getItem('missHitPoint'));
            incorrectHitPoint = parseFloat(localStorage.getItem('incorrectHitPoint'));
            popUpFrequency = parseFloat(localStorage.getItem('popUpFrequency'));
            nbackProb = parseInt(localStorage.getItem('nbackProb'));
            moleHatProb = parseInt(localStorage.getItem('moleHatProb'));
        } catch {}        
    }
    
    /**
     * Construct the JSON file and download to local (device) storage
     */
    function setJSON() {
        var date = new Date();
        var jsonObj = {};
        jsonObj['time'] = date.getTime();
        jsonObj['level'] = localStorage.level;
        jsonObj['setting'] = {};        
        jsonObj['setting']['numberOfHoles'] = numberOfHoles;
        jsonObj['setting']['timerMin'] = timerMin;
        jsonObj['setting']['timerSec'] = timerSec;
        jsonObj['setting']['baseScore'] = baseScore;
        jsonObj['setting']['correctHitPoint'] = correctHitPoint;
        jsonObj['setting']['missHitPoint'] = missHitPoint;
        jsonObj['setting']['badHitPoint'] = incorrectHitPoint;
        jsonObj['setting']['popUpFrenquency'] = popUpFrequency;
        try {
            jsonObj['setting']['nBack'] = N;
            jsonObj['setting']['nBackProp'] = nbackProb;
            jsonObj['setting']['moleHatProp'] = moleHatProb;
        } catch {}
        

        jsonObj['finalScore'] = {};
        jsonObj['finalScore']['totalScore'] = score;
        jsonObj['finalScore']['hitScore'] = hit;
        jsonObj['finalScore']['missScore'] = miss;
        jsonObj['finalScore']['badHitScore'] = badHit;

        jsonObj['interaction'] = interaction;
      
        var json = JSON.stringify(jsonObj);
        var blob = new Blob([json], {type: "application/json"});
        
        // Use FileSaver.js
        saveAs(blob, localStorage.userID + "_" + localStorage.level + "_" + date.getTime() + ".json");
    }

    /**
     * Set up holes on the game board
     * @param {int} nHoles  Number of total holes
     */
    function setHoles(nHoles) {
        for(i = 0; i < nHoles; i++) {
            const hole = document.createElement('div');
            hole.classList.add('hole');
            hole.classList.add('hole'+keys[i]);
            const mole = document.createElement('div');
            mole.classList.add('mole');
            mole.classList.add('mole'+keys[i]);
            hole.appendChild(mole);
            if(nHoles < 4) {
                hole.style.backgroundPosition = "center";
            }
            game.appendChild(hole);
        }
    }

    function enableMoleSounds(typeHit) {
        switch(typeHit) {
            case 'miss' || 'bad':
                whackMissSound.play();
                break;
            case 'hit':
                whackSound.play();
                break;
            default:
                break;
        }
    }

    function randomTime(min, max) {
        return Math.round(Math.random() * max - min + min);
    }

    function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) {
            console.log('Ah nah thats the same one bud');
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }

    /**
     * Update scores based on what the hit's type
     * @param {String} typeHit  miss | hit | bad
     */
    function updateScores(typeHit) {
        switch(typeHit) {
            case 'miss':
                score = score + missHitPoint;
                scoreBoard.textContent = score;
                miss = miss + missHitPoint;
                missScore.textContent = miss;
                break;
            case 'hit':
                score = score + correctHitPoint;
                scoreBoard.textContent = score;
                hit = hit + correctHitPoint;
                hitScore.textContent = hit;
                break;
            case 'bad':
                score = score + incorrectHitPoint;
                scoreBoard.textContent = score;
                badHit = badHit + incorrectHitPoint;
                badHitScore.textContent = badHit;
                break;
            default:
                break;
        }
    }

    function updateTimer() {
        if (timerTotal === 0) {
            musicBg.pause();
            return;
        }
        timerTotal = timerTotal - 1;
        timerCount.textContent = Math.floor(timerTotal/60) + " : " + (timerTotal%60); 
    }

    function checkIdleTime() {
        idleTimeCount++;
        if(idleTimeCount >= IDLE_TIME) {
            alert("Page Timeout!");
            location.href = "version.html";
        }
    }

    function updateInteraction(typeHit) {
        var timeInteraction = (timeHit - timeMoleUp)/1000;
        interaction[moleUp] = {
            "time": timeInteraction,
            "typeHit": typeHit
        };
        // console.log(interaction);
        moleUp++;
    }
    
    function peep() {
        // const time = randomTime(3000, 5000);
        var hole = holes[0];
        if (holes.length > 1) {
            hole = randomHole(holes);
        }
        timeMoleUp = Date.now();
        hole.classList.add('up');
        hole.style.backgroundImage = mole;
        setTimeout(() => {
            timeHit = Date.now();
            updateScores('miss');
            enableMoleSounds('miss');
            updateInteraction('miss');
            hole.classList.remove('up');
            hole.style.backgroundImage = "url('media/hole-crop.png')";
            if (!timeUp) peep();
            else console.log('Timeout!')
        }, popUpFrequency * 1000);
    }

    // When mole is hit!
    function bonk(e) {
        console.log('Bonk!');
        if (!this.classList.contains('up')) return;
        // if (!e.isTrusted) return; // cheater!
        timeHit = Date.now();
        updateScores('hit');
        enableMoleSounds('hit');
        updateInteraction('hit');
        this.classList.remove('up');
        this.style.backgroundImage = moleCorrent;
        setTimeout(() => {
            this.style.backgroundImage = "url('media/hole-crop.png')";
        }, 300);

        scoreBoard.textContent = score;
    }

    // Change cursor every time mouse clicks
    function changeCursor() {
        console.log('Hammer!');
        document.body.style.cursor = 'url(media/images/hammer-click.png), auto';
        setTimeout(() => {
            console.log('Back to Normal');
            document.body.style.cursor = 'url(media/images/hammer-normal.png), auto';
        }, 200);
    }

    // Enable keyboard to hit mole
    function hitMole(e) {
        if(!keys.includes(e.keyCode.toString()) && !btnFlag) return;
        document.getElementsByClassName(`hole${e.keyCode}`)[0].click();
    }

    // Start game when press startButton
    function startGame(e) {
        console.log('Start');
        setGame();
        // scoreBoard.textContent = baseScore;
        // timerCount.textContent = Math.floor(TIME_TOTAL/60) + " : " + (TIME_TOTAL%60);
        // timeUp = false;
        // score = baseScore;
        // timerTotal = TIME_TOTAL;
        musicBg.play()
        peep();
        var timer = setInterval(updateTimer, 1000);
        setTimeout(() => {
            timeUp = true;
            setJSON();
            clearInterval(timer);
            // resetGame();
            holes.forEach(hole => function() {
                hole.classList.remove('up');
            });
            musicBg.pause();
        }, TIME_TOTAL * 1000);
    }

    /**
     * Click other elements
     * E.g. click the button for starting game, going back home
     * @param {EventHandler} e 
     */
    function clickBtn(e) {
        if(!keys.includes(e.keyCode.toString())) return;
        // q
        if(e.keyCode === 81) {
            try {
                btns[0].click();
            }
            catch(err) {
                return;
            }
        }
        // w
        if(e.keyCode === 87) {
            try {
                btns[1].click();
            }
            catch(err) {
                return;
            }
        }
        // e
        if(e.keyCode === 69) {
            try {
                btns[2].click();
            }
            catch(err) {
                return;
            }
        }
        // a
        if(e.keyCode === 65) {
            try {
                btns[3].click();
            }
            catch(err) {
                return;
            }
        }
        // s
        if(e.keyCode === 83) {
            try {
                btns[4].click();
            }
            catch(err) {
                return;
            }
        }
        // d
        if(e.keyCode === 68) {
            try {
                btns[5].click();
            }
            catch(err) {
                return;
            }
        }
    }

    // Set up the cursor when the document is loading
    // document.body.style.cursor = 'url(media/images/hammer-normal.png), auto';

    document.addEventListener('keydown', function(e) {
        // Reset the idle time counter to '0' whenever there is an event to the page
        idleTimeCount = 0;

        // 1. Check btnFlag to enable buttons for playing game
        if (btnFlag) {
            hitMole(e);
        }
        // 2. If btnFlag is false, click on other elements. 
        else {
            if(!keys.includes(e.keyCode.toString())) return;
            clickBtn(e);
        }
    });

    startButton.addEventListener('click', function() {
        // Reset the idle time counter to '0' whenever there is an event to the page
        idleTimeCount = 0;

        // 0. Set btnFlag to 'true' to enable buttons for playing game
        btnFlag = true;        
        // 1. Change play button to reset
        startButton.disabled = true;
        // 2. Start game
        startGame();
    });

    // moles.forEach(mole => mole.addEventListener('click', bonk));
    holes.forEach(hole => hole.addEventListener('click', bonk));

    // Check idle time every second
    // setInterval(checkIdleTime, 1000);
};