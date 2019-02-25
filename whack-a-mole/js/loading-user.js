window.onload = function() {
    console.log('loaded');
    
    setLocalStorage();

    function setLocalStorage() {
        var userDefault = data[localStorage.level];
        // var userDefault = JSON.parse(data);
        // userDefault = userDefault[localStorage.level];

        try {
            localStorage.setItem('nBack', userDefault['nBack']);
            localStorage.setItem('numberOFfHoles', userDefault['numberOfHoles']);
            localStorage.setItem('timerMin', userDefault['timerMin']);
            localStorage.setItem('timerSec', userDefault['timerSec']);
            localStorage.setItem('baseScore', userDefault['baseScore']);
            localStorage.setItem('correctHitPoint', userDefault['correctHitPoint']);
            localStorage.setItem('missHitPoint', userDefault['missHitPoint']);
            localStorage.setItem('incorrectHitPoint', userDefault['badHitPoint']);
            localStorage.setItem('popUpFrequency', userDefault['popUpFrequency']);
            localStorage.setItem('moleHatProp', userDefault['moleHatProb']);
        } catch {}
    }
}