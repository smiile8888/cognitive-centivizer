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

    const probDefaultMole = 0.7;

    // Set the music
    const musicBg = new Audio('media/sounds/musica.wav');
    const whackSound = new Audio('media/sounds/oww.wav');
    const whackMissSound = new Audio('media/sounds/whack.wav');

    // Set the default moles and hole
    const holeImg = 'url("media/images/hole.png")';
    const moleHat = 'url("media/images/molehat.png")';
    const moleHatIncorrent = 'url("media/images/molehatincorrect.png")';
    const mole = 'url("media/images/basicmole.png")';
    const moleIncorrect = 'url("media/images/wrongMole.png")';
    const moleCorrent = 'url("media/images/basicmolecorrect.png")';

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
        scoreBoard.innerHTML = baseScore;
        timerCount.innerHTML = Math.floor(TIME_TOTAL/60) + " : " + (TIME_TOTAL%60);
        hitScore.innerHTML = "0";
        missScore.innerHTML = "0";
        badHitScore.innerHTML = "0";
        timeUp = false;
        // btnFlag = false;
        // startButton.disabled = false;
        score = baseScore;
        miss = 0;
        hit = 0;
        badHit = 0;
        moleUp = 1;
        holes.forEach(hole => function() {
            hole.classList.remove('up');
            hole.style.backgroundImage = holeImg;
        });
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
     * Load the moles with number on their shirts followed by the number of holes
     * @param {int} nHoles  Number of total holes
     */
    function loadMolesWithNumber(nHoles) {
        for(i=0; i<nHoles; i++) {
            molesBg.push("url('media/images/basicmole"+i+".png')");
        }
    }

    function randomTime(min, max) {
        return Math.round(Math.random() * max - min + min);
    }

    function resetMole() {
        lastMole = undefined;
        moleFlag = 0;
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

    /**
     * Random the hole to pop the mole up
     * @param {int} holes 
     * @returns {Element} hole
     */
    function randomHole(holes) {
        const idx = Math.floor(Math.random() * holes.length);
        const hole = holes[idx];
        if (hole === lastHole) {
            // console.log('Ah nah thats the same one bud');
            return randomHole(holes);
        }
        lastHole = hole;
        return hole;
    }

    /**
     * Random the shown-up mole
     * @param {int} nMoles 
     * @returns {Element} mole
     */
    function randomMole(nMoles) {
        const idx = Math.floor(Math.random() * nMoles);
        const mole = molesBg[idx];
        if (lastMole != undefined) {
            if (randomMoleProb(nbackProb/100)) {
                console.log("same mole");
                moleFlag++;
                return lastMole;
            } else {
                if (mole === lastMole) {
                    // console.log('Ah nah same mole man');
                    return randomMole(nMoles);
                } 
                moleFlag = 0;
            }
        }
        lastMole = mole;
        moleFlag++;
        return mole;
    }

    /**
     * Random the probability of moles for different purposes
     * E.g.
     * 0.7 is for showing up either basic mole or mole with hate.
     * nbackProb is for N-Back problem deciding the next one should be repeated or not.
     * @param {float} prob  Proability of showing a mole for different purposes
     */
    function randomMoleProb(prob) {
        var ranProb = Math.random();
        // console.log(ranProb);
        return ranProb <= prob;
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
    
    /**
     * Update scores based on what the hit's type
     * @param {String} typeHit  miss | hit | bad
     */
    function updateScores(typeHit) {
        switch(typeHit) {
            case 'miss':
                score = score + missHitPoint;
                scoreBoard.innerHTML = score;
                miss = miss + missHitPoint;
                missScore.innerHTML = miss;
                break;
            case 'hit':
                score = score + correctHitPoint;
                scoreBoard.innerHTML = score;
                hit = hit + correctHitPoint;
                hitScore.innerHTML = hit;
                break;
            case 'bad':
                score = score + incorrectHitPoint;
                scoreBoard.innerHTML = score;
                badHit = badHit + incorrectHitPoint;
                badHitScore.innerHTML = badHit;
                break;
            default:
                break;
        }
    }

    /**
     * Countdown timer
     */
    function updateTimer() {
        if (timerTotal === 0) {
            musicBg.pause();
            return;
        }
        timerTotal = timerTotal - 1;
        timerCount.innerHTML = Math.floor(timerTotal/60) + " : " + (timerTotal%60); 
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
        let hole = holes[0];
        if (holes.length > 1) {
            hole = randomHole(holes);
        }

        // Get the probability of showing basic mole
        // if (randomMoleProb(probDefaultMole)) {
        //     let mole = randomMole(numberOfHoles);
        //     hole.classList.add('up');
        //     hole.style.backgroundImage = mole;
        // } else {
        //     // hole.childNodes[0].classList.add('moleHat');
        //     // hole.childNodes[0].style.backgroundImage = moleHat;
        //     hole.classList.add('moleHat');
        //     hole.style.backgroundImage = moleHat;
        // }

        let mole = randomMole(numberOfHoles);
        timeMoleUp = Date.now();
        hole.classList.add('up');
        hole.style.backgroundImage = mole;

        // hole.style.backgroundImage = 'none';
        // hole.classList.add('up');
        setTimeout(() => {
            // if (hole.childNodes[0].classList.contains('moleHat')) {
            //     hole.childNodes[0].classList.remove('moleHat');
            // }
            timeHit = Date.now();
            if (hole.classList.contains('moleHat')) {
                hole.classList.remove('moleHat');
                resetMole();
            } else if (hole.classList.contains('up') && moleFlag > N) {
                console.log('Miss');
                updateScores('miss');
                updateInteraction("miss");
                resetMole();
            } else if (hole.classList.contains('up') && moleFlag <= N) {
                console.log('Good Miss');
                updateInteraction("goodMiss");
            }
            
            hole.classList.remove('up');
            // hole.childNodes[0].classList.remove('up');
            
            // hole.style.backgroundImage = 'block';
            hole.style.backgroundImage = holeImg;
            if (!timeUp) peep();
            else console.log('Timeout!')
        }, popUpFrequency * 1000);
    }

    /**
     * EventListener whenever mole is hit!
     * @param {Event} e 
     */
    function bonk(e) {
        timeHit = Date.now();
        if (!this.classList.contains('moleHat') && !this.classList.contains('up')) {
            enableMoleSounds('miss');
            updateScores('miss');
            updateInteraction("miss");
            resetMole();
        } else if (this.classList.contains('moleHat')) {
            enableMoleSounds('bad');
            updateScores('bad');
            updateInteraction("bad");
            this.classList.remove('moleHat');
            this.style.backgroundImage = moleHatIncorrent;
            resetMole();
        } else if (moleFlag <= N){
            enableMoleSounds('miss');
            updateScores('miss');
            updateInteraction("miss");
            this.style.backgroundImage = moleIncorrect;
            resetMole();
        } else {
            enableMoleSounds('hit');
            updateScores('hit');
            updateInteraction("hit");
            this.style.backgroundImage = moleCorrent;
        }

        // Change background to hole after 300 ms.
        setTimeout(() => {
            this.classList.remove('up');
            this.style.backgroundImage = holeImg;
        }, 300);
    }

    // Change cursor every time mouse clicks
    function changeCursor() {
        document.body.style.cursor = 'url(media/images/hammer-click.png), auto';
        setTimeout(() => {
            document.body.style.cursor = 'url(media/images/hammer-normal.png), auto';
        }, 200);
    }

    // Enable keyboard to hit mole
    function hitMole(e) {
        if(!keys.includes(e.keyCode.toString()) && !btnFlag) return;
        document.getElementsByClassName(`hole${e.keyCode}`)[0].click();
    }

    // Start game when click on startButton
    function startGame(e) {
        console.log('Start');
        // timeUp = false;
        // score = baseScore;
        // timerTotal = TIME_TOTAL;
        setGame();
        loadMolesWithNumber(numberOfHoles);
        musicBg.play();
        peep();
        // Countdown timer
        var timer = setInterval(updateTimer, 1000);
        // When time's up!
        setTimeout(() => {
            timeUp = true;
            btnFlag = false;
            // Download JSON file
            setJSON();
            // Clear timeInterval
            clearInterval(timer);
            // Clear all the moles that cureently pops up
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
        setTimeout(() => {
            startButton.innerHTML = "Reset Game";
            startGame()
        }, 3000);
    });

    // moles.forEach(mole => mole.addEventListener('click', bonk));
    holes.forEach(hole => hole.addEventListener('click', bonk));

    // Check idle time every second
    // setInterval(checkIdleTime, 1000);
};