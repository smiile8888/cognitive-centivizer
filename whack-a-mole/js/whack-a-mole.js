window.onload = function() {

    /**
     * Set new default setting for game
     * When a user sets new default setting
     */
    function setDefault() {

    }
    
    /**
     * Retrieve the default setting for game from .json file
     * To store to localStorage on the website using for setting up game
     * @param {String} fName - File name storing the default setting
     */
    function retrieveDefault(fName) {
        // Read .json file

        // Store to window.localStorage
        const N = parseInt(localStorage.getItem("nbackNo")); //nback data
        const numberOfHoles = parseInt(localStorage.getItem("nHoles")); //number of holes
        const playerID = localStorage.getItem("playerID"); //playerID data
        const timerMin = parseInt(localStorage.getItem("timerMin")); //countdown timer minutes data
        const timerSec = parseInt(localStorage.getItem("timerSec")); //countdown timer seconds data
        const timerTotal = timerMin*60 + timerSec; //combine minutes and seconds for countdown timer
        const baseScore = parseFloat(localStorage.getItem("baseScore")); //base score data
        const correctHitPoint = parseFloat(localStorage.getItem("correctHitPoint")); //correctHitPoint data
        const missHitPoint = parseFloat(localStorage.getItem("missHitPoint")); //missHitPoint data
        const incorrectHitPoint = parseFloat(localStorage.getItem("incorrectHitPoint")); //incorrectHitPoint data
        const popUpFrequency = parseFloat(localStorage.getItem("popUpFrequency")); //mole pop up frequency data
        const nbackProb = parseInt(localStorage.getItem("nbackProb")); //probability of n-back match happens
    }

    function setUpTheGame() {
        const finalScore = 0; //initialize final score for one round of game
        const timer = timerTotal; //made a change here, initialize timer=0 to =180
        $("#timer").text("Timer : " + Math.floor(timer/60) + " : " + Math.floor((Math.floor(timer%60))/10) + "" + Math.floor(timer%60)%10); //made a change, uncommented this line, and changed $("#timer").text("Time Remaining: " + timer);
            const start_flag = false;
        const whackImages = []; 
        const moleStateMap = [];
        const numMoles = numberOfHoles; //number of hole
        const attempt = 0; //this will be used to name the json files for storing data
    
        const recentlyWhacked = -1;
        const numMolesOnBoard = 0;
    }

    function setInitialRecordedData() {
        const numCorrectHit = 0;//number of hit in one session of game
        const numWrongHit = 0;//number wrong of hit (hit on distraction) in one session of game
        const responseTime = 0; //response time
        const numMiss = 0; //number of miss hit
        const aBadHit; //=1 if hit a mole with hat, else =0
        const startTime; // will be used to calculate response time
        const endTime; // will be used to calculate response ti me by minus startTime
        // const originScore = 50; //initial score 
        const trialNo = 0; //keep track of user's each hit of mole, mole with hat, or miss
        const finalScore = 0; //initialize final score for one round of game

        const correctHit = 0; //this variable will be stored in JSON file, =1 if the user hit a target, else =0
        const wrongHit = 0; //this variable will be stored in JSON file, =1 if the user hit a distractor, else =0
        const missHit =0; //this variable will be stored in JSON file, =1 if the missed hitting a target, else =0
    }
}