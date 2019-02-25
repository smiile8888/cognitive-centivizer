window.onload = function() {
    const saveBtn = document.getElementById('saveBtn');
    const btns = document.querySelectorAll('button');
    // const setDefaultBtn = document.getElementById('setDefaultBtn');
    const keys = ['81', '87', '69', '65', '83', '68'];

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

    // Load the default setting when the page is loading.
    try {
        document.all.nbackNo.value = localStorage.getItem('nBack');
        document.all.nHoles.value = localStorage.getItem('numberOfHoles');
        document.all.timerMin.value = localStorage.getItem('timerMin');
        document.all.timerSec.value = localStorage.getItem('timerSec');
        document.all.baseScore.value = localStorage.getItem('baseScore');
        document.all.correctHitPoint.value = localStorage.getItem('correctHitPoint');
        document.all.missHitPoint.value = localStorage.getItem('missHitPoint');
        document.all.incorrectHitPoint.value = localStorage.getItem('incorrectHitPoint');
        document.all.popUpFrequency.value = localStorage.getItem('popUpFrequency');
        document.all.nbackProb.value = localStorage.getItem('nbackProb');
        document.all.moleHatProb.value = localStorage.getItem('moleHatProb');
    } catch {}

    function saveSetting() {
        try {
            localStorage.nbackNo = document.all.nbackNo.value;
            localStorage.numberOfHoles = document.all.nHoles.value;
            localStorage.timerMin = document.all.timerMin.value;
            localStorage.timerSec = document.all.timerSec.value;
            localStorage.baseScore = document.all.baseScore.value;
            localStorage.correctHitPoint = document.all.correctHitPoint.value;
            localStorage.missHitPoint = document.all.missHitPoint.value;
            localStorage.incorrectHitPoint = document.all.incorrectHitPoint.value;
            localStorage.popUpFrequency = document.all.popUpFrequency.value;
            localStorage.nbackProb = document.all.nbackProb.value;
            localStorage.moleHatProb = document.all.moleHatProb.value;
        } catch {}
        
        window.history.back();
    }

    function setNewDefault() {        
        try {
            data[localStorage.level]['nBack'] = document.all.nbackNo.value;
            data[localStorage.level]['numberOfHoles'] = document.all.nHoles.value;
            data[localStorage.level]['timerMin'] = document.all.timerMin.value;
            data[localStorage.level]['timerSec'] = document.all.timerSec.value;
            data[localStorage.level]['baseScore'] = document.all.baseScore.value;
            data[localStorage.level]['correctHitPoint'] = document.all.correctHitPoint.value;
            data[localStorage.level]['missHitPoint'] = document.all.missHitPoint.value;
            data[localStorage.level]['incorrectHitPoint'] = document.all.incorrectHitPoint.value;
            data[localStorage.level]['popUpFrequency'] = document.all.popUpFrequency.value;
            data[localStorage.level]['nbackProb'] = document.all.nbackProb.value;
            data[localStorage.level]['moleHatProb'] = document.all.moleHatProb.value;
        } catch {}

        var content = "data = " + JSON.stringify(data);
        console.log(content);
        var blob = new Blob([content], {type: "text/javascript"});
        console.log(blob);
        saveAs(blob, 'db/setting/' + localStorage.userID + '.js');
        
        // saveSetting();
    }

    saveBtn.addEventListener('click', saveSetting);
    // setDefaultBtn.addEventListener('click', setNewDefault);
    document.addEventListener('keydown', clickBtn);
}